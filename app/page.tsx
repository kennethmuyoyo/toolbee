'use client'

import { useState } from 'react'
import Card from '@/components/card_tool'
import HeroSection from '@/section/herosection/herosection'
import ToolSection from '@/section/toolsection/toolsection'
import Navbar from '@/components/Navbar'
import { cardsData } from '@/constants/card_data'

const Page: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  }

  return (
    <>
    <Navbar/>
      <HeroSection
        categories={selectedCategories}
        onCategorySelect={handleCategorySelect}
        link="https://example.com" // replace with the link you want
      />
      <section id="toolsection">
      <ToolSection selectedCategories={selectedCategories} cards={cardsData}/>
      </section>
    </>
  )
}

export default Page;
