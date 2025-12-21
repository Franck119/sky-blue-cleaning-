
export type Language = 'en' | 'fr';

export interface Service {
  id: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  detailedDescription: { en: string; fr: string };
  icon: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Specialized';
  price?: string;
  includedTasks: { en: string[]; fr: string[] };
  specifications: { en: string[]; fr: string[] };
}

export interface PortfolioItem {
  id: string;
  title: { en: string; fr: string };
  location: string;
  description: { en: string; fr: string };
  results: { en: string; fr: string };
  imageUrl: string;
  category: string;
}

export interface Value {
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  icon: string;
}

export interface BlogPost {
  id: string;
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  date: string;
  imageUrl: string;
  author: string;
}
