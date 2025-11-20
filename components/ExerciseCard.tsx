import React from 'react';
import { Exercise } from '../types';
import QuickTip from './QuickTip';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 mb-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Image Container - Contiguity Principle: Visual near text */}
        <div className="md:w-2/5 h-64 md:h-auto bg-slate-100 relative overflow-hidden group">
            <img
              src={exercise.imageUrl}
              alt={`Demonstration of ${exercise.name}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
        </div>

        {/* Content Container */}
        <div className="p-6 md:w-3/5 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-slate-900">{exercise.name}</h3>
            <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
              {exercise.setsReps}
            </span>
          </div>
          
          <p className="text-slate-600 mb-4 leading-relaxed text-lg">
            {exercise.description}
          </p>

          {/* Signaling Principle: Highlighted tip */}
          <QuickTip content={exercise.tip} />
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;