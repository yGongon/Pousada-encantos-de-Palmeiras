import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#F8F5F2] z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="w-16 h-16 border-4 border-amber-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
