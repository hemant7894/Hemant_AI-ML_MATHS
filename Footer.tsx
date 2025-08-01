import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="text-slate-400 text-lg mb-2">Contact Information</p>
        <div className="flex justify-center items-center gap-6 text-slate-300">
          <a href="mailto:thehemant0@gmail.com" className="hover:text-sky-400 transition-colors">
            thehemant0@gmail.com
          </a>
          <span className="text-slate-600">|</span>
          <a href="tel:+918005540371" className="hover:text-sky-400 transition-colors">
            +91 8005540371
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
