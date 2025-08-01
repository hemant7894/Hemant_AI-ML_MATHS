
import React, { useState } from 'react';
import type { Subject } from './types.ts';
import Header from './components/Header.tsx';
import SubjectSelector from './components/SubjectSelector.tsx';
import SyllabusViewer from './components/SyllabusViewer.tsx';
import ChatInterface from './components/ChatInterface.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [view, setView] = useState<'selector' | 'syllabus' | 'chat'>('selector');

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setView('syllabus');
  };

  const handleBackToSelection = () => {
    setSelectedSubject(null);
    setView('selector');
  };
  
  const handleStartChat = () => {
    setView('chat');
  };
  
  const handleBackToSyllabus = () => {
    setView('syllabus');
  };

  const renderContent = () => {
    if (!selectedSubject) {
      return <SubjectSelector onSelectSubject={handleSelectSubject} />;
    }

    switch (view) {
      case 'chat':
        return <ChatInterface subject={selectedSubject} onBack={handleBackToSyllabus} />;
      case 'syllabus':
        return <SyllabusViewer subject={selectedSubject} onBack={handleBackToSelection} onStartChat={handleStartChat} />;
      default:
        return <SubjectSelector onSelectSubject={handleSelectSubject} />;
    }
  }

  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-center py-3 px-4 shadow-lg">
        <p className="text-sm md:text-base">
          For live 1-to-1 classes, connect on{' '}
          <a href="tel:+918005540371" className="font-semibold underline hover:text-sky-200 transition-colors">
            +91 8005540371
          </a>{' '}
          or{' '}
          <a href="mailto:thehemant0@gmail.com" className="font-semibold underline hover:text-sky-200 transition-colors">
            thehemant0@gmail.com
          </a>
        </p>
      </div>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;