import type { ReactNode } from 'react';

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  syllabus: string[];
  systemInstruction: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}