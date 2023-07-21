'use client'

import { useState } from 'react'
import HeroSection from '@/section/herosection/herosection'
import ToolSection from '@/section/toolsection/toolsection'
import Navbar from '@/components/Navbar'
import FeatureSection from '@/section/featuresection/featuresection'
import Newssection from '@/section/newssection/newsection'
import Footer from '@/components/footer'
import HomeSection from '@/section/homesection/homesection'
import MyHead from './head'


const Page: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);

  const handleCategorySelect = (category: string) => {
    let newSelectedCategories = [];

    if (category === 'All') {
      newSelectedCategories = [category];
    } else if (selectedCategories.includes('All')) {
      newSelectedCategories = [category];
    } else {
      newSelectedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category];
    }

    setSelectedCategories(newSelectedCategories);
  }

  return (
    <>
    <MyHead/>
    <Navbar/>
      <HomeSection/>
      <HeroSection
        categories={selectedCategories}
        onCategorySelect={handleCategorySelect}
        link="https://example.com" // replace with the link you want
      />
      <ToolSection selectedCategories={selectedCategories}/>
      <FeatureSection />
      <Newssection />
      <Footer />
    </>
  )
}

export default Page;
