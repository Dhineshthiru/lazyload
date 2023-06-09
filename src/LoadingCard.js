import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg m-2">

      <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
      <div className="px-6 py-4 items-center">
        <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
      </div>
      
    </div>
  );
};

export default LoadingCard;