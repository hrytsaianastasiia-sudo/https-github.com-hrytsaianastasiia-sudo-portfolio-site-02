import { Project, Service, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    tag: 'END-TO-END APPLICATION',
    title: 'Empowering Natural Hair Journeys with a Personalised Diary App',
    description: 'Creating a Natural Hair app that helps users document, manage, track, and celebrate their natural hair journey.',
    fullDescription: 'This project focused on addressing the unique challenges faced by individuals with textured hair. We built an end-to-end mobile application that acts as a digital companion, allowing users to log daily routines, track product efficacy, and access a curated library of hair care resources. The design emphasizes inclusivity and ease of use, featuring a warm color palette and intuitive navigation.',
    imageUrl: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'View Case Study',
    imageBgColor: 'bg-[#F3F4F6]',
    imagePadding: 'p-0',
    technologies: ['React Native', 'Firebase', 'Redux', 'Figma'],
    testimonial: {
      quote: "The attention to detail in the UX specifically for the natural hair community is unmatched. It's not just an app; it's a movement.",
      author: "Sarah Jenkins",
      role: "Product Lead at CurlTech"
    },
    link: 'https://example.com'
  },
  {
    id: '2',
    tag: 'ADDING A FEATURE TO AN APPLICATION',
    title: 'Adding a Message Scheduling Feature to WhatsApp Messenger',
    description: 'This feature will enable users to schedule messages to be sent at a later time or date, ensuring important communications are never missed.',
    fullDescription: 'We explored the user need for delayed communication in instant messaging. By integrating a seamless "Schedule Send" option within the existing chat interface, we maintained the app\'s simplicity while adding powerful functionality. The process involved extensive user testing to ensure the feature felt native to the WhatsApp ecosystem.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'View Case Study',
    imageBgColor: 'bg-[#F3F4F6]',
    imagePadding: 'p-0',
    technologies: ['User Research', 'Prototyping', 'Principle', 'Adobe XD'],
    testimonial: {
      quote: "A feature we didn't know we needed until we saw this implementation. Simple, intuitive, and highly requested.",
      author: "David Chen",
      role: "Senior UX Researcher"
    },
    link: 'https://example.com'
  },
  {
    id: '3',
    tag: 'WEB DESIGN & STRATEGY',
    title: 'Reimagining E-Commerce for Sustainable Fashion Brands',
    description: 'A minimal, eco-conscious e-commerce platform designed to highlight supply chain transparency and carbon footprint impact.',
    fullDescription: 'For this project, the goal was to translate sustainability values into digital design. We used a low-carbon design approach, optimizing assets and code to reduce energy consumption. The UI brings transparency to the forefront, allowing shoppers to trace the origin of every garment with a single click.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'View Case Study',
    imageBgColor: 'bg-[#F3F4F6]',
    imagePadding: 'p-0',
    technologies: ['Next.js', 'Tailwind CSS', 'Shopify API', 'WebGL'],
    testimonial: {
      quote: "The design perfectly encapsulates our brand ethos. It's clean, fast, and tells our sustainability story beautifully.",
      author: "Elena Rossi",
      role: "Founder, EcoWear"
    },
    link: 'https://example.com'
  },
  {
    id: '4',
    tag: 'DASHBOARD UI/UX',
    title: 'Fintech Analytics Dashboard for Crypto Portfolio Tracking',
    description: 'A comprehensive data visualization tool for real-time asset tracking, featuring customizable widgets and dark mode support.',
    fullDescription: 'Designed for power users, this dashboard aggregates data from multiple exchanges into a unified view. The challenge was to present complex financial data without overwhelming the user. We utilized modular widgets and a high-contrast dark theme to ensure readability and quick decision-making in volatile markets.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'View Case Study',
    imageBgColor: 'bg-[#F3F4F6]',
    imagePadding: 'p-0',
    technologies: ['D3.js', 'React', 'TypeScript', 'WebSockets'],
    testimonial: {
      quote: "Finally, a dashboard that balances complexity with clarity. The dark mode implementation is flawless.",
      author: "Marcus Thorne",
      role: "Crypto Analyst"
    },
    link: 'https://example.com'
  },
  {
    id: '5',
    tag: 'IOT MOBILE APP',
    title: 'Smart Home Control Hub: Unifying Device Management',
    description: 'An intuitive IoT application allowing users to seamlessly control lighting, temperature, and security from a single interface.',
    fullDescription: 'Fragmentation is the biggest issue in smart homes. This app unifies various protocols (Zigbee, Z-Wave, WiFi) into a single, cohesive interface. We focused on "Scene" creation, allowing users to set the mood of an entire room with one tap, rather than adjusting individual devices.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop',
    ctaText: 'View Case Study',
    imageBgColor: 'bg-[#F3F4F6]',
    imagePadding: 'p-0',
    technologies: ['Flutter', 'MQTT', 'Bluetooth LE', 'Sketch'],
    testimonial: {
      quote: "It turned my chaotic mix of smart devices into a truly smart home. The 'Goodnight' scene logic is brilliant.",
      author: "James Peterson",
      role: "Tech Reviewer"
    },
    link: 'https://example.com'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'ideate',
    title: 'IDEATE',
    subtitle: 'User Research, Discovery, Strategy, Audits'
  },
  {
    id: 'design',
    title: 'DESIGN',
    subtitle: 'UX/UI Design, Prototyping, Design Systems, Visual Design'
  },
  {
    id: 'develop',
    title: 'DEVELOP',
    subtitle: 'Front-end Development, Collaboration, Handoff'
  },
  {
    id: 'maintain',
    title: 'MAINTAIN',
    subtitle: 'Optimization, Iteration, Support'
  }
];