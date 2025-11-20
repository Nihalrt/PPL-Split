import React from 'react';
import ExerciseCard from '../components/ExerciseCard';
import MuscleDiagram from '../components/MuscleDiagram';
import Quiz from '../components/Quiz';
import { Exercise, MuscleGroup, QuizQuestion } from '../types';

const LegDay: React.FC = () => {
  const exercises: Exercise[] = [
    {
      name: "Goblet Squat",
      description: "A beginner-friendly squat variation. Hold a weight at chest height, keeping your chest up, and squat down by pushing your hips back and knees out.",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBrllu6nLYTh7xwsVTBhlbBibtfaHCUEH5aFkJS2V24xzkQq3zzrfqmknQzSlL",
      setsReps: "3 Sets x 8-12 Reps",
      tip: "Keep your heels planted firmly on the ground. Imagine gripping the floor with your toes."
    },
    {
      name: "Romanian Deadlift (RDL)",
      description: "Targets the hamstrings and glutes. Hinge at the hips with a slight knee bend, lowering the weight while keeping it close to your legs until you feel a stretch.",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPMkynqRlD4yy0-rlmCwmvxWsMs9Y_URwh7yny4X0sm1_pA7DhhgfTfuzD4-m7",
      setsReps: "3 Sets x 8-10 Reps",
      tip: "This is a hip hinge, not a squat. Your hips should move backward horizontally."
    },
    {
      name: "Lunges",
      description: "A unilateral leg exercise that builds balance and strength. Step forward, lowering your back knee toward the ground while keeping your torso upright.",
      imageUrl: "https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_900x.webp?v=1741687877",
      setsReps: "3 Sets x 10-12 Reps (Per Leg)",
      tip: "Ensure your front knee tracks over your toes but doesn't cave inward."
    }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "The Romanian Deadlift primarily targets which muscles?",
      options: ["Quads and Calves", "Hamstrings and Glutes", "Chest and Triceps", "Abs and Obliques"],
      correctAnswer: 1,
      explanation: "The RDL is a hip-hinge movement specifically designed to stretch and strengthen the posterior chain (Hamstrings/Glutes)."
    },
    {
      id: 2,
      question: "What is a key cue for the Goblet Squat?",
      options: ["Lift your heels", "Round your back", "Keep chest up and knees out", "Look at the ceiling"],
      correctAnswer: 2,
      explanation: "Keeping the chest up prevents upper back rounding, and pushing knees out engages the glutes and protects knee joints."
    }
  ];

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Leg Day</h1>
        <p className="text-xl text-slate-600">Focus: Quads, Hamstrings, Glutes</p>
      </header>

      <MuscleDiagram type={MuscleGroup.LEGS} />

      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default LegDay;