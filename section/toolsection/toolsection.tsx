import React from 'react'
import Card from '@/components/card_tool'

interface ToolSectionProps {
  selectedCategories: string[];
  cards: Array<{
    id: number;
    name: string;
    image: string;
    link: string;
    category: string;
    description: string;
  }>
}

const Toolsection: React.FC<ToolSectionProps> = ({ selectedCategories, cards }) => {
  // filter the cards based on selected categories
  const filteredCards = cards.filter(card => 
    selectedCategories.includes(card.category)
  );

  return (
    <div>
      <div className="w-full text-center text-orange-50 text-[32px] font-semibold">YOUR HONEY POT OF AI TOOLS</div>
      <h1 className="text-center">Filtered Tools:</h1>
      <div className="flex flex-wrap justify-around">
        {filteredCards.map(card => 
          <Card key={card.id} {...card} />
        )}
      </div>
    </div>
  )
}

export default Toolsection
