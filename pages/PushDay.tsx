import React from 'react';
import ExerciseCard from '../components/ExerciseCard';
import MuscleDiagram from '../components/MuscleDiagram';
import Quiz from '../components/Quiz';
import { Exercise, MuscleGroup, QuizQuestion } from '../types';

const PushDay: React.FC = () => {
  const exercises: Exercise[] = [
    {
      name: "Push-Ups",
      description: "A foundational compound movement that targets the chest, anterior deltoids, and triceps. Keep your core tight and body in a straight line throughout the movement.",
      imageUrl: "https://cdn.shopify.com/s/files/1/1281/4359/files/E8398_28art.jpg", // Placeholder for nature/texture - ideally would be gym specific
      setsReps: "3 Sets x 10-15 Reps",
      tip: "Keep your elbows tucked at a 45-degree angle to your torso to protect your shoulders."
    },
    {
      name: "Overhead Press",
      description: "The primary vertical pushing movement for overall shoulder development and core stability. Press the weight straight up, moving your head slightly forward as the bar passes.",
      imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-overhead-press.jpg",
      setsReps: "3 Sets x 8-12 Reps",
      tip: "Do not arch your lower back excessively. Squeeze your glutes to maintain a neutral spine."
    },
    {
      name: "Tricep Dips",
      description: "An effective bodyweight isolation exercise for the triceps. Lower yourself until your elbows are at 90 degrees, then push back up explosively.",
      imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/bench-dip-on-floor.jpg",
      setsReps: "3 Sets x 10-12 Reps",
      tip: "Lean forward slightly to involve the chest, or stay upright to focus more on the triceps."
    }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Which muscle group is NOT primarily targeted during Push Day?",
      options: ["Chest", "Biceps", "Triceps", "Shoulders"],
      correctAnswer: 1,
      explanation: "Biceps are a 'Pull' muscle used for pulling motions. Push day targets Chest, Shoulders, and Triceps."
    },
    {
      id: 2,
      question: "During a push-up, where should your elbows generally be positioned?",
      options: ["Flared out 90 degrees", "Tucked completely against ribs", "45-degree angle from torso", "Above your head"],
      correctAnswer: 2,
      explanation: "A 45-degree angle offers the best balance between chest activation and shoulder safety."
    }
  ];

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Push Day</h1>
        <p className="text-xl text-slate-600">Focus: Chest, Shoulders, Triceps</p>
      </header>

      <MuscleDiagram type={MuscleGroup.PUSH} />

      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default PushDay;