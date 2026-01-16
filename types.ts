export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  imageBgColor?: string;
  imagePadding?: string;
  technologies?: string[];
  testimonial?: Testimonial;
  fullDescription?: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
}

export interface NavLink {
  label: string;
  href: string;
}