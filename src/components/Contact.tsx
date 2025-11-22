import React, { useState, useRef, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactForm } from '../types';
// @ts-ignore
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 👇 CẤU HÌNH EMAIL (Đã kiểm tra chính xác từ ảnh của bạn)
  const SERVICE_ID = 'service_s1q05ml';   
  const TEMPLATE_ID = 'template_sae6mdd'; 
  const PUBLIC_KEY = 'Yyt-6A0usSg1XheFo'; 

  // ✅ Dùng useEffect để khởi tạo Key ngay khi vào trang (Cách này ổn định nhất)
  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
      console.log("EmailJS đã khởi tạo với Key:", PUBLIC_KEY);
    } catch (error) {
      console.error("Lỗi khởi tạo EmailJS:", error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    if (form.current) {
      // 👇 Gửi form chỉ với 3 tham số (Vì Key đã init ở trên rồi)
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
        .then((result: any) => {
            console.log('EmailJS Success:', result.text);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }, (error: any) => {
            console.error('EmailJS Error Chi Tiết:', error);
            setErrorMessage('Gửi thất bại. Lỗi: ' + (error.text || "Không xác định"));
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's connect</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              I'm currently open to new opportunities and collaborations. Feel free to reach out through the form or my social channels.
            </p>

            <div className="grid gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{link.platform}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connect on {link.platform}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4" /> {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isSuccess 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-primary hover:bg-blue-600'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};