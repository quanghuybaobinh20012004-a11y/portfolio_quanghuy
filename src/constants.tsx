import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Category, Project, Skill, TimelineItem, BlogPost, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Bui Quang Huy",
  title: "Frontend & Mobile App Developer",
  dob: "20/01/2004",
  gender: "Male",
  address: "84 Street No. 30, Ward 6, Go Vap District, Ho Chi Minh City",
  email: "vuinhungratbuon113@gmail.com",
  phone: "0396 131 659",
  summary: "I am a passionate technology student specializing in Frontend Web, Mobile App development, and Graphic Design. I have practical experience building applications using React, React Native, and TypeScript. With a strong eye for UI/UX and a quick ability to learn new technologies, I aim to become a professional developer creating seamless digital experiences.",
  cvLink: "/cv.pdf", 
  avatar: "avt.png" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/quanghuybaobinh20012004-a11y", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/huy-búi-quang-b763a939a", icon: Linkedin },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { platform: "Phone", url: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`, icon: Phone },
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'JavaScript (ES6+)', level: 85, category: 'Programming Languages' },
  { name: 'TypeScript', level: 80, category: 'Programming Languages' },
  { name: 'HTML5 & CSS3', level: 90, category: 'Programming Languages' },
  
  // Frameworks & Libraries
  { name: 'ReactJS', level: 85, category: 'Frameworks & Libraries' },
  { name: 'Next.js', level: 70, category: 'Frameworks & Libraries' },
  { name: 'React Native', level: 75, category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', level: 90, category: 'Frameworks & Libraries' },
  { name: 'Expo', level: 75, category: 'Frameworks & Libraries' },

  // Tools & Platform
  { name: 'Git/GitHub', level: 85, category: 'Tools & Platform' },
  { name: 'Firebase', level: 70, category: 'Tools & Platform' },
  { name: 'REST API', level: 80, category: 'Tools & Platform' },

  // Design
  { name: 'Figma (UI/UX)', level: 75, category: 'Design' },
  { name: 'Photoshop/Illustrator', level: 50, category: 'Design' },

  // Soft Skills
  { name: 'Teamwork', level: 90, category: 'Soft Skills' },
  { name: 'Communication', level: 85, category: 'Soft Skills' },
  { name: 'Problem Solving', level: 80, category: 'Soft Skills' },
  { name: 'Self-Learning', level: 95, category: 'Soft Skills' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'React Essentials',
    role: 'Frontend Developer',
    category: Category.WEB,
    description: 'A comprehensive guide and demo of React core concepts.',
    fullDescription: 'This project serves as an interactive documentation and demonstration of React essentials. It covers State management, Props, Hooks, and component lifecycle, providing a solid foundation for understanding modern React development.',
    techStack: ['ReactJS', 'Vite', 'CSS'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
    githubUrl: 'https://github.com/quanghuybaobinh20012004-a11y',
    demoUrl: 'https://reactesstinal.netlify.app/',
    goal: 'Demonstrate mastery of React fundamentals and create a learning resource.',
  },
  {
    id: '2',
    title: 'Resume Builder',
    role: 'Frontend Developer',
    category: Category.WEB,
    description: 'An online tool to create and format professional resumes.',
    fullDescription: 'A dynamic web application that allows users to input their professional details, education, and experience to generate a structured resume. Features include real-time preview and different formatting options.',
    techStack: ['ReactJS', 'TailwindCSS', 'Forms'],
    imageUrl: 'https://picsum.photos/600/400?random=11',
    githubUrl: 'https://github.com/quanghuybaobinh20012004-a11y',
    demoUrl: 'https://resumebuilder11111.netlify.app/',
    goal: 'Build a useful utility tool for job seekers to easily create CVs.',
  },
  {
    id: '3',
    title: 'Personal Portfolio V1',
    role: 'Frontend Developer',
    category: Category.WEB,
    description: 'My personal portfolio website showcasing projects and skills.',
    fullDescription: 'A responsive personal website designed to introduce myself, showcase my projects, and provide contact information. It highlights my skills in frontend development and UI design.',
    techStack: ['React', 'Netlify', 'CSS'],
    imageUrl: 'https://picsum.photos/600/400?random=12',
    githubUrl: 'https://github.com/quanghuybaobinh20012004-a11y',
    demoUrl: 'https://portfolo123456789.netlify.app/',
    goal: 'Create a professional online presence to connect with recruiters.',
  },
  {
    id: '4',
    title: 'AI Chat Application',
    role: 'Mobile Developer',
    category: Category.MOBILE,
    description: 'A modern chat application leveraging Google Gemini API.',
    fullDescription: 'Built with React Native and Expo, this application integrates the Gemini API to provide real-time AI assistance. Features include secure Firebase authentication, chat history persistence, and a highly responsive UI designed for mobile devices.',
    techStack: ['React Native', 'Expo', 'Firebase', 'Gemini API'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com/quanghuybaobinh20012004-a11y',
    demoUrl: undefined, // Mobile app typically doesn't have a web link
    goal: 'Build an AI chat app with a modern interface, supporting login and history.',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Frontend Developer',
    organization: 'Personal Project (Portfolio)',
    period: 'Feb 2024 – Present',
    description: 'Designed and developed a personal portfolio website using ReactJS and TailwindCSS. Implemented dark mode, responsive design, and data visualization for skills.',
  },
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Mobile App Developer',
    organization: 'Personal Project (AI Chat App)',
    period: 'Jan 2024 – Mar 2024',
    description: 'Built a mobile chat application with React Native and Expo. Integrated Google Gemini API for AI responses and Firebase for authentication and real-time data storage.',
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Student - Information Technology (3rd Year)',
    organization: 'Van Lang University',
    period: '2022 – Present',
    description: 'Currently a 3rd-year student majoring in Information Technology. Focusing on core software engineering principles, algorithms, data structures, and specialized modules in Web and Mobile development.',
  },
  {
    id: 'goal-1',
    type: 'experience',
    title: 'Future Goal: Professional Developer',
    organization: 'Frontend / Mobile App',
    period: 'Next 1-2 Years',
    description: 'Aiming to develop professional skills in a real-world environment (intern or part-time), building high-applicability products with excellent user experience.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React Native & Expo',
    date: 'March 15, 2024',
    excerpt: 'A quick guide to setting up your first mobile environment using Expo Go.',
    content: `
      React Native is a popular framework for building mobile applications using JavaScript and React. However, setting up the development environment can sometimes be tricky. That's where Expo comes in.
      
      ### Why Expo?
      Expo is a framework and a platform for universal React applications. It provides a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

      ### Getting Started
      1. **Install Node.js**: Make sure you have Node.js installed on your machine.
      2. **Create a project**: Run \`npx create-expo-app my-app\`.
      3. **Start the server**: Run \`npx expo start\`.
      4. **Run on device**: Download the Expo Go app on your phone and scan the QR code.

      It's that simple! You can now start editing your \`App.js\` file and see changes instantly on your device.
    `,
    tags: ['Mobile', 'React Native'],
    category: 'Technology',
    imageUrl: 'https://picsum.photos/800/400?random=101'
  },
  {
    id: '2',
    title: 'Why Tailwind CSS improves developer experience',
    date: 'February 10, 2024',
    excerpt: 'Utility-first CSS classes save time and keep your design system consistent.',
    content: `
      Tailwind CSS has revolutionized the way many developers write CSS. Instead of writing custom CSS classes for every component, you use small, single-purpose utility classes directly in your HTML (or JSX).

      ### Key Benefits
      * **Speed**: You don't have to switch between HTML and CSS files. You style elements right where you define them.
      * **Consistency**: Tailwind provides a predefined design system (colors, spacing, typography), making it harder to use "magic numbers" or inconsistent colors.
      * **Responsive Design**: Prefixed utilities like \`md:flex\` or \`lg:w-1/2\` make building responsive layouts incredibly intuitive.

      Once you get used to the syntax, it's hard to go back to traditional CSS!
    `,
    tags: ['CSS', 'Frontend'],
    category: 'Web Dev',
    imageUrl: 'https://picsum.photos/800/400?random=102'
  },
  {
    id: '3',
    title: 'Understanding UI/UX Principles for Developers',
    date: 'January 20, 2024',
    excerpt: 'How developers can make better design decisions without being a designer.',
    content: `
      As a frontend developer, understanding basic UI/UX principles can significantly improve the quality of your work. You don't need to be an artist, but you should understand how users interact with interfaces.

      ### Core Principles
      1. **Consistency**: Elements that behave the same should look the same.
      2. **Feedback**: The system should always keep users informed about what is going on (e.g., loading spinners, success messages).
      3. **Hierarchy**: Use typography and spacing to show which information is most important. Big, bold text is read first.
      4. **Whitespace**: Don't be afraid of empty space. It gives content room to breathe and makes the interface look cleaner.

      By applying these simple rules, you can create applications that are not only functional but also a joy to use.
    `,
    tags: ['UI/UX', 'Design'],
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/400?random=103'
  },
];