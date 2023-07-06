'use client'
import React, { useState } from 'react'
import Hexagon from './hexagon'
import { categories } from '@/constants/categories'

interface HexagonTreeProps {
  selectedCategories: string[];
  handleCategorySelect: (category: string) => void;
}

const HexagonTree: React.FC<HexagonTreeProps> = ({ selectedCategories, handleCategorySelect }) => {

  const pattern = [5, 4, 5, 4, 3]; // Define the pattern for the rows
  const rows: string[][] = [];
  let row: string[] = [];
  let patternIndex = 0;
  
  for (const category of categories) {
    row.push(category);
    
    if (row.length === pattern[patternIndex]) {
      rows.push(row);
      row = [];
      patternIndex++;
    }
  }

  if (row.length > 0) {
    rows.push(row); // push the remaining elements, if any
  }

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex justify-center ${rowIndex % 2 === 0 ? 'mb-5 md:mb-8' : '-mt-10 -mb-5 md:-mt-16 md:-mb-8'} ${rowIndex % 2 !== 0 ? 'ml' : ''}`}>
          {row.map((category) => (
  <Hexagon 
  key={category} 
  category={category} 
  selected={selectedCategories.includes(category)} 
  onCategorySelect={handleCategorySelect} 
/>
        ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonTree;
