import React from 'react';
import { Lightbulb } from 'lucide-react';

interface QuickTipProps {
  content: string;
}

const QuickTip: React.FC<QuickTipProps> = ({ content }) => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md my-4 shadow-sm flex items-start gap-3">
      <div className="text-amber-500 mt-1 shrink-0">
        <Lightbulb size={20} />
      </div>
      <div>
        <h4 className="font-bold text-amber-800 text-sm uppercase mb-1">Quick Tip</h4>
        <p className="text-slate-700 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default QuickTip;