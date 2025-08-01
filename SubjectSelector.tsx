
import React from 'react';
import type { Subject } from '../types.ts';
import { SUBJECTS } from '../constants.tsx';

interface SubjectSelectorProps {
  onSelectSubject: (subject: Subject) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onSelectSubject }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center text-slate-200 mb-8">Choose a subject to start learning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject)}
            className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-sky-500/20 hover:bg-slate-700 transition-all duration-300 ease-in-out text-left flex flex-col items-center text-center group"
          >
            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {subject.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{subject.name}</h3>
            <p className="text-slate-400 text-sm">{subject.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;