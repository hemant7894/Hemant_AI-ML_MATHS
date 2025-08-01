
import React from 'react';
import type { Subject } from '../types.ts';

interface SyllabusViewerProps {
  subject: Subject;
  onBack: () => void;
  onStartChat: () => void;
}

const SyllabusViewer: React.FC<SyllabusViewerProps> = ({ subject, onBack, onStartChat }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-150px)] max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl animate-fade-in">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors">&larr; Change Subject</button>
        <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">{subject.name}</span>
            <div className="w-8 h-8">{subject.icon}</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">{subject.name} Curriculum</h2>
            <p className="text-slate-400">{subject.description}</p>
        </div>
        
        <div className="space-y-4">
            {subject.syllabus.map((item, index) => (
                 <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-200">{item}</p>
                </div>
            ))}
        </div>
      </div>

       <div className="p-4 border-t border-slate-700 text-center">
        <button 
          onClick={onStartChat}
          className="bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/30 w-full md:w-auto"
        >
          Start Tutoring Session
        </button>
      </div>
    </div>
  );
};

export default SyllabusViewer;