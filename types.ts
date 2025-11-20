export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
}

export interface Exercise {
  name: string;
  description: string;
  imageUrl: string;
  setsReps: string;
  tip: string;
}

export enum MuscleGroup {
  PUSH = 'PUSH',
  PULL = 'PULL',
  LEGS = 'LEGS',
  FULL = 'FULL'
}