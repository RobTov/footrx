export interface Service {
  id: string;
  name: string;
  image: string;
}

export interface Provider {
  id: string;
  name: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ScheduleSlot {
  day: string;
  times: string[];
}

export interface ContactInfo {
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
}

export interface ServiceDetail {
  id: string;
  name: string;
  image: string;
  description: string;
}