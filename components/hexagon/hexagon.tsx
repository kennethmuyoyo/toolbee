import React from 'react';
import { useColors } from './useColors';

interface HexagonProps {
  category: string;
  selected: boolean;   
  onCategorySelect: (category: string) => void;
}

const Hexagon: React.FC<HexagonProps> = ({ category, selected, onCategorySelect }) => {
  
  const colors = useColors();
  
  const handleCardSelect = () => {
    onCategorySelect(category);
  }

  return (
    <div className="inline-block -mx-0.5"> 
        <button onClick={handleCardSelect} className="focus:outline-none">
            <svg className="w-24 h-24 md:w-36 md:h-36 transform hover:scale-105 transition duration-300" viewBox="0 0 100 100">
                {selected ? (
                    <>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={colors.selectedColor}/>
                    <foreignObject x="10" y="25" width="80" height="50">
                        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: colors.selectedTextColor}}>
                        {category.split(/ (?![^-]*-)/).map((word, index) => <span key={index} style={{fontSize: '11px', fontFamily: 'poppins', fontWeight: '400'}}>{word}</span>)}
                        </div>
                    </foreignObject>
                    </>
                ) : (
                    <>
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={colors.unselectedColor}/>
                    <foreignObject x="10" y="25" width="80" height="50">
                        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: colors.unselectedTextColor}}>
                        {category.split(/ (?![^-]*-)/).map((word, index) => <span key={index} style={{fontSize: '11px', fontFamily: 'poppins', fontWeight: '400'}}>{word}</span>)}
                        </div>
                    </foreignObject>
                    </>
                )}
            </svg>
        </button>
    </div>
  )
}

export default Hexagon;
