import React from 'react';

const SectionLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-900 border-solid border-transparent"></div>
    </div>
  );
};

export default SectionLoader;
