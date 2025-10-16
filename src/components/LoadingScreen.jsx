import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-emerald-400/30 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">Loading Portfolio</h2>
        <p className="text-gray-400">Preparing something amazing...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;