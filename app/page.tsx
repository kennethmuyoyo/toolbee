'use client'

import { useState } from 'react'
import HeroSection from '@/section/herosection/herosection'
import ToolSection from '@/section/toolsection/toolsection'
import Navbar from '@/components/Navbar'
import FeatureSection from '@/section/featuresection/featuresection'
import Newssection from '@/section/newssection/newsection'
import Footer from '@/components/footer'
import HomeSection from '@/section/homesection/homesection'
import Head from 'next/head'


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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.icc"/>
        <link rel="manifest" href="/favicon.ico"/>
        <link rel="mask-icon" href="/favicon.ico" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
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
