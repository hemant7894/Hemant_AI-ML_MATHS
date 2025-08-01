import React from 'react';

const Header = () => {
  return (
    <header className="py-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text">
        Expert Tutoring Services
      </h1>
      <p className="text-slate-400 mt-2 text-lg">by Hemant Sharma</p>
      <p className="text-slate-500 mt-1">With 10+ Years of Teaching Experience</p>
    </header>
  );
};

export default Header;