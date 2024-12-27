export interface Mentor {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  image: string;
  experience: string;
  company?: string;
}

export interface MentoringSession {
  id: string;
  mentorId: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  scheduledFor: Date;
  createdAt: Date;
  updatedAt: Date;
}
