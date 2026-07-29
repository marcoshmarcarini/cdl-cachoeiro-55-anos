export interface TimelineMilestone {
  year: string;
  decade: string;
  title: string;
  description: string;
  category: "Fundação" | "Inovação" | "Serviços" | "Crescimento" | "Futuro";
  image?: string;
  highlights: string[];
}

export interface LeaderItem {
  name: string;
  role: string;
  period: string;
  quote?: string;
  image?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Solene" | "Negócios" | "Networking" | "Social";
  description: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  company: string;
  segment: string;
  yearsAssociated: number;
  message: string;
  avatar?: string;
}

export interface TributeRequest {
  storeName: string;
  ownerName: string;
  segment: string;
  yearsInCachoeiro: string;
  specialMemory?: string;
}

export interface TributeResponse {
  headline: string;
  message: string;
  certificateCode: string;
  dateGenerated: string;
}
