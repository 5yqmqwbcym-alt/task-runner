import React from 'react';

function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-primary to-secondary rounded-t-2xl pt-10 pb-5 px-5 mb-7 relative overflow-hidden">
      <div className="text-center relative z-10">
        <div className="mx-auto mb-5 w-20 h-20 bg-white rounded-3xl p-2.5 shadow-xl flex items-center justify-center">
          <img src="/logo.png" alt="Task Runner Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-white text-4xl m-0 mb-2.5 font-bold drop-shadow-lg">
          Task Runner
        </h1>
        <p className="text-white/95 text-xl m-0 mb-5 font-normal">
          Stay organized. Get things done.
        </p>
      </div>
      <div className="w-full mt-5 rounded-xl overflow-hidden shadow-2xl">
        <img src="/hero.png" alt="Task Runner Hero" className="w-full h-auto block opacity-95" />
      </div>
    </div>
  );
}

export default Hero;
