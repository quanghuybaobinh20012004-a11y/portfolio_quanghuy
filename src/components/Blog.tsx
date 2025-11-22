import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight, X, Plus, PenTool, Image as ImageIcon, Trash2 } from 'lucide-react';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  // 1. KHỞI TẠO DỮ LIỆU TỪ LOCAL STORAGE (Để không bị mất khi F5)
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    // Kiểm tra xem trong trình duyệt đã có dữ liệu lưu chưa
    const savedPosts = localStorage.getItem('my_portfolio_posts');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    // Nếu chưa có thì dùng dữ liệu mẫu mặc định
    return BLOG_POSTS;
  });
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isWriting, setIsWriting] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    tags: [],
    category: 'Technology',
    imageUrl: ''
  });
  const [tempTag, setTempTag] = useState('');

  // 2. TỰ ĐỘNG LƯU KHI CÓ THAY ĐỔI
  useEffect(() => {
    localStorage.setItem('my_portfolio_posts', JSON.stringify(posts));
  }, [posts]);

  // Extract all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;

    const postToAdd: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title!,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      excerpt: newPost.excerpt || newPost.content!.substring(0, 100) + '...',
      content: newPost.content!,
      tags: newPost.tags?.length ? newPost.tags : ['General'],
      category: newPost.category || 'General',
      imageUrl: newPost.imageUrl || `https://picsum.photos/800/400?random=${Date.now()}`
    };

    setPosts([postToAdd, ...posts]); // Thêm bài mới lên đầu
    setIsWriting(false);
    setNewPost({ title: '', excerpt: '', content: '', tags: [], category: 'Technology', imageUrl: '' });
    alert("Đã lưu bài viết vào bộ nhớ trình duyệt!");
  };

  const handleAddTag = () => {
    if (tempTag && !newPost.tags?.includes(tempTag)) {
        setNewPost({ ...newPost, tags: [...(newPost.tags || []), tempTag] });
        setTempTag('');
    }
  };

  // Thêm chức năng xóa bài viết (để bạn test dễ hơn)
  const handleDeletePost = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn chặn mở modal chi tiết
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
        setPosts(posts.filter(p => p.id !== id));
    }
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4">
            <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
                <div className="w-20 h-1 bg-primary mt-2 rounded-full"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Sharing knowledge about technology and design.</p>
            </div>
            
            <button 
                onClick={() => setIsWriting(true)}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                <PenTool className="w-5 h-5" /> Write New Post
            </button>
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              selectedTag === null
                ? 'bg-gray-800 text-white border-gray-800 dark:bg-white dark:text-gray-900'
                : 'text-gray-600 border-gray-300 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                tag === selectedTag
                  ? 'bg-primary text-white border-primary'
                  : 'text-gray-600 border-gray-300 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col relative group">
              {/* Nút xóa bài viết (chỉ hiện khi hover) */}
              <button 
                onClick={(e) => handleDeletePost(post.id, e)}
                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 z-10"
                title="Delete Post"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span className="text-primary font-medium">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                 {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <button 
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                    Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL: WRITE NEW POST */}
      {isWriting && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsWriting(false)}></div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-200">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Write New Article</h3>
                    <button onClick={() => setIsWriting(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <X className="w-6 h-6 dark:text-white" />
                    </button>
                </div>
                
                <form onSubmit={handlePublish} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                        <input 
                            type="text" required 
                            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                            value={newPost.title}
                            onChange={e => setNewPost({...newPost, title: e.target.value})}
                            placeholder="Enter article title..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                            <select 
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none dark:text-white"
                                value={newPost.category}
                                onChange={e => setNewPost({...newPost, category: e.target.value})}
                            >
                                <option>Technology</option>
                                <option>Web Dev</option>
                                <option>Design</option>
                                <option>Career</option>
                            </select>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image URL (Optional)</label>
                             <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none dark:text-white"
                                    value={newPost.imageUrl}
                                    onChange={e => setNewPost({...newPost, imageUrl: e.target.value})}
                                    placeholder="https://..."
                                />
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                                    <ImageIcon className="w-5 h-5 text-gray-500" />
                                </div>
                             </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content</label>
                        <textarea 
                            required rows={6}
                            className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none dark:text-white"
                            value={newPost.content}
                            onChange={e => setNewPost({...newPost, content: e.target.value})}
                            placeholder="Write your content here (supports Markdown-like text)..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
                        <div className="flex gap-2 mb-2">
                            <input 
                                type="text" 
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none dark:text-white"
                                value={tempTag}
                                onChange={e => setTempTag(e.target.value)}
                                placeholder="Add a tag..."
                                onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                            />
                            <button type="button" onClick={handleAddTag} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                                <Plus className="w-5 h-5 dark:text-white" />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {newPost.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full text-sm flex items-center gap-1">
                                    {tag}
                                    <button type="button" onClick={() => setNewPost({...newPost, tags: newPost.tags?.filter(t => t !== tag)})} className="hover:text-red-500">×</button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
                        <button type="button" onClick={() => setIsWriting(false)} className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                            Publish Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )}

      {/* MODAL: READ POST */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 z-20"
            >
              <X className="w-6 h-6" />
            </button>
            
            {selectedPost.imageUrl && (
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title} 
                className="w-full h-64 object-cover"
              />
            )}
            
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{selectedPost.date}</span>
                <span className="mx-1">•</span>
                <span className="text-primary font-medium">{selectedPost.category}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedPost.title}
              </h3>

              <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Tag className="w-4 h-4 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};