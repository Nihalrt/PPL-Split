import React from 'react';
import { MuscleGroup } from '../types';

interface MuscleDiagramProps {
  type: MuscleGroup;
}

const MuscleDiagram: React.FC<MuscleDiagramProps> = ({ type }) => {
  const isPush = type === MuscleGroup.PUSH;
  const isPull = type === MuscleGroup.PULL;
  const isLegs = type === MuscleGroup.LEGS;

  // Simple SVG colors
  const activeColor = "#4f46e5"; // Indigo 600
  const inactiveColor = "#e2e8f0"; // Slate 200
  const strokeColor = "#94a3b8"; // Slate 400

  return (
    <div className="w-full flex justify-center mb-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="text-center">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Target Muscles</h3>
        <svg width="150" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            {/* Head */}
            <circle cx="50" cy="20" r="10" fill={inactiveColor} stroke={strokeColor} strokeWidth="1" />
            
            {/* Torso (Chest/Abs area) - Push Priority */}
            <rect x="35" y="35" width="30" height="50" rx="5" fill={isPush ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            
            {/* Shoulders (Delts) - Push Priority */}
            <circle cx="25" cy="40" r="8" fill={isPush ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            <circle cx="75" cy="40" r="8" fill={isPush ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />

            {/* Arms (Biceps/Triceps) - Pull (Bi) / Push (Tri) */}
            <rect x="15" y="50" width="10" height="35" rx="3" fill={isPush || isPull ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            <rect x="75" y="50" width="10" height="35" rx="3" fill={isPush || isPull ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />

            {/* Back (Represented by simple trapezius/lats lines overlay) - Pull Priority */}
             {isPull && (
                <path d="M 35 35 L 65 35 L 50 85 Z" fill={activeColor} opacity="0.5" />
             )}

            {/* Legs - Leg Priority */}
            <rect x="35" y="90" width="12" height="45" rx="3" fill={isLegs ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            <rect x="53" y="90" width="12" height="45" rx="3" fill={isLegs ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            
            {/* Calves - Leg Priority */}
            <rect x="35" y="140" width="12" height="40" rx="3" fill={isLegs ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
            <rect x="53" y="140" width="12" height="40" rx="3" fill={isLegs ? activeColor : inactiveColor} stroke={strokeColor} strokeWidth="1" />
        </svg>
        <div className="mt-4 text-xs text-slate-500 font-medium">
          {isPush && "Focus: Chest, Shoulders, Triceps"}
          {isPull && "Focus: Back, Biceps, Rear Delts"}
          {isLegs && "Focus: Quads, Hamstrings, Glutes, Calves"}
        </div>
      </div>
    </div>
  );
};

export default MuscleDiagram;