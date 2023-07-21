import React, { useEffect, useState } from 'react'
import Hexagon from './hexagon'
import useSWR from 'swr'
import sanityClient from '@/sanityClient'

interface HexagonTreeProps {
  selectedCategories: string[];
  handleCategorySelect: (category: string) => void;
}

const fetcher = (query: string) => sanityClient.fetch(query)

const HexagonTree: React.FC<HexagonTreeProps> = ({ selectedCategories, handleCategorySelect }) => {
  const { data: rawAitools, error } = useSWR<{category: string[]}[]>('*[_type == "aitools"]', fetcher)
  const [windowWidth, setWindowWidth] = useState(0);
  let isMobile = windowWidth <= 768; // or whatever value you want to have as a breakpoint

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }

  if (error) return <div>Failed to load</div>
  if (!rawAitools) return <div>Loading...</div>

  let categories = Array.from(new Set(rawAitools.flatMap(aitool => aitool.category))).sort();
  categories.unshift('All');

  // Pattern for mobile and desktop
  const pattern = isMobile ? [4, 3, 4, 3, 4, 3, 2, 1] : [6, 5, 4, 5, 4]; 
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
    rows.push(row);
  }

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex justify-center ${rowIndex %2 ===0 ? 'mb-6 md:mb-8' : '-mt-12 -mb-6 md:-mt-16 md:-mb-8'} ${rowIndex %2 !==0 ? 'ml' : ''}`}>
          {row.map((category) => (
            <Hexagon 
              key={category} 
              category={category} 
              selected={selectedCategories.length === 0 || selectedCategories.includes(category)} 
              onCategorySelect={handleCategorySelect} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonTree;
