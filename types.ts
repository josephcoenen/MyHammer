
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Craftsman {
  id: string;
  name: string;
  businessName: string;
  rating: number;
  reviews: number;
  location: string;
  specialties: string[];
  imageUrl: string;
  verified: boolean;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export enum JobStep {
  DESCRIPTION = 'DESCRIPTION',
  IMAGE_ANALYSIS = 'IMAGE_ANALYSIS',
  LOCATION = 'LOCATION',
  REVIEW = 'REVIEW'
}
