'use client'

import React from 'react'
import HexagonTree from '@/components/hexagon/hexagon_tree'
import Button from '@/components/button'
import Link from 'next/link';
import { renderCheckMark } from './renderCheckMark'
import Image from 'next/image';

interface HeroSectionProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
  link: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ categories, onCategorySelect, link }) => {
  // Display the selected categories somewhere in the HeroSection
  const selectedCategoriesList = categories.join(', ');

  return (
    <section className="mx-14">
      <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-4 lg:py-16">
        <div className="mt-6 lg:mt-0 lg:order-last">
          <HexagonTree
          selectedCategories={categories}
          handleCategorySelect={onCategorySelect}
        />        
        </div>  
        <div className="mt-8 mx-auto lg:ml-auto">
        <div className="text-orange-50 text-[32px] font-semibold mb-5">Choose your categories and make some honey.</div>
        <div className="text-yellow-500 text-[32px] font-semibold mb-10">You will find your AI tools below!</div>
        <div className="text-orange-50 text-[20px] font-semibold mb-3">A Hive full of AI tools:</div>

          {/* List of steps */}
          <div className="space-y-4">
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="text-white text-[18px] ml-2">Select your category</p>
            </div>
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="text-white text-[18px] ml-2">Click Make Some Honey</p>
            </div>
            <div className="mb-2 flex items-center">
              {renderCheckMark()}
              <p className="text-white text-[18px] ml-2">Scroll Down to see the full list of AI tools relevant to your category</p>
            </div>
          </div>
          <div className="flex justify-end items-end mt-6">
          {/* <Image src="/honey_dipper.svg" alt="honey dipper" height={200} width={200}/> */}
          </div>

          <Button className="mb-10 mt-20 rounded-3xl w-[600px] bg-yellow-500">
            <a href="#toolsection">
              <div className="mt-2 mb-2 justify-start items-start flex">
                <div className="mx-3 text-slate-950 text-[16px] ">
                  Make some honey
                </div>
              </div>
            </a>
          </Button>

        </div>        
      </div>
    </section>
  )
}

export default HeroSection
