import React from 'react';
import ExerciseCard from '../components/ExerciseCard';
import MuscleDiagram from '../components/MuscleDiagram';
import Quiz from '../components/Quiz';
import { Exercise, MuscleGroup, QuizQuestion } from '../types';

const PullDay: React.FC = () => {
  const exercises: Exercise[] = [
    {
      name: "Lat Pulldown",
      description: "A vertical pulling movement primarily targeting the latissimus dorsi (lats) for back width. Pull the bar down to your upper chest while squeezing your shoulder blades together.",
      imageUrl: "https://picsum.photos/id/146/800/600",
      setsReps: "3 Sets x 10-12 Reps",
      tip: "Initiate the movement by driving your elbows down, not by pulling with your hands."
    },
    {
      name: "Dumbbell Row",
      description: "A horizontal pulling movement for back thickness. Support yourself on a bench, keep your back flat, and pull the dumbbell towards your hip pocket.",
      imageUrl: "https://picsum.photos/id/175/800/600",
      setsReps: "3 Sets x 10-12 Reps (Per Side)",
      tip: "Avoid rotating your torso to throw the weight up. Keep your shoulders square to the floor."
    },
    {
      name: "Face Pulls",
      description: "Crucial for rear deltoid health and posture. Pull the rope attachment towards your forehead, flaring your elbows out and squeezing the upper back.",
      imageUrl: "https://picsum.photos/id/203/800/600",
      setsReps: "3 Sets x 15-20 Reps",
      tip: "Think about pulling your hands apart as they approach your face to maximize rear delt activation."
    }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary focus of Pull Day?",
      options: ["Pushing weight away", "Leg strength", "Pulling weight towards the body", "Core stability only"],
      correctAnswer: 2,
      explanation: "Pull Day focuses on the posterior chain (back) and biceps by pulling resistance towards the body."
    },
    {
      id: 2,
      question: "Where should you feel the tension during a Lat Pulldown?",
      options: ["Lower Back", "The Lats (Upper Back)", "Forearms", "Neck"],
      correctAnswer: 1,
      explanation: "While arms assist, the primary mover should be the Lats. If you feel it only in arms, focus on driving elbows down."
    }
  ];

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Pull Day</h1>
        <p className="text-xl text-slate-600">Focus: Back, Biceps, Rear Delts</p>
      </header>

      <MuscleDiagram type={MuscleGroup.PULL} />

      <div className="space-y-2">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <Quiz questions={quizQuestions} />
    </div>
  );
};

export default PullDay;