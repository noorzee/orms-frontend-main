import React from 'react'
import { HiPlus,HiX } from 'react-icons/hi'

const Acordination_nested = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
  
  return (
    <>
    
    <div
      onClick={() => handleSetIndex(Id)}
      className="flex group cursor-pointer pl-2 pr-2 bg-gray-100 w-full h-18 pt-2 pb-2 justify-between items-center uppercase tracking-wide text-gray-700 text-xs font-bold  hover:bg-gray-100 border-b-1 border-slate-200"
    >
      <div className="flex group cursor-pointer">
        <div className="uppercase tracking-wide text-gray-700 text-xs font-bold">
          {title}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        {Index !== Id ? (
          <HiPlus className="w-4 h-4  text-gray-700" />
        ) : (
          <HiX className="w-4 h-4  text-gray-700" />
        )}
      </div>
    </div>

    {Index === Id && (
      <div className="bg-white font-semibold text-gray-700 w-full h-auto py-4 ">
        {children}
      </div>
    )}
  </>
  );
};

export default Acordination_nested