'use client'

import React, { useState } from 'react'
import { useColors } from './useColors';

interface HexagonProps {
  category: string;
  selected: boolean;   
  onCategorySelect: (category: string) => void;
}

const Hexagon: React.FC<HexagonProps> = ({ category, selected, onCategorySelect }) => {
  
  const colors=useColors();
  
  const handleCardSelect=()=>{
    onCategorySelect(category);
  }
  
  return (
    <div className="inline-block -mx-0.5"> 
        <button onClick={handleCardSelect} className="focus:outline-none">
            <svg className="w-16 h-16 md:w-32 md:h-32" viewBox="0 0 100 100">
            
              {selected?(
                <>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={colors.selectedColor}/>
                <text x="50%" y="50%" textAnchor="middle" stroke={colors.selectedTextColor} strokeWidth="px" dy=".3em" fontSize="10">{category}</text>
                </>

              ):(
                <>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={colors.unselectedColor}/>
                <text x="50%" y="50%" textAnchor="middle" stroke={colors.unselectedTextColor} strokeWidth="px" dy=".3em" fontSize="10">{category}</text>
                </>
              )}
            </svg>
        </button>
    </div>
  )
}

export default Hexagon

