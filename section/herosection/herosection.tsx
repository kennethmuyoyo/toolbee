import React from 'react';
import HexagonTree from '@/components/hexagon/hexagon_tree';
import Button from '@/components/button';
import Link from 'next/link';
import { renderCheckMark } from './renderCheckMark';
import Image from 'next/image';

interface HeroSectionProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
  link: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  categories,
  onCategorySelect,
  link,
}) => {
  // Display the selected categories somewhere in the HeroSection
  const selectedCategoriesList = categories.join(', ');

  return (
    <section className="relative px-4 md:px-14 bg-custom-purple">
      <div id="toolsection" className="relative pt-24 text-center justify-center font-league-spartan text-gray-100 md:text-[40px] text-[30px] font-bold">
        AI DIRECTORY
        <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-20 absolute top-12 -left-14 opacity-20" loading="eager"/>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-xl px-4 py-8 md:gap-8 md:py-16">
        <div className="mx-auto">
          <div className="font-poppins text-gray-100 md:text-[35px] text-[25px] font-semibold mb-5">
            Choose your categories and make some honey.
          </div>
          <div className="font-poppins text-custom-yellow md:text-[35px] text-[25px] font-semibold mb-10">
            You will find your AI tools below!
          </div>
          <div className="font-poppins text-gray-100 text-[20px] md:text-[25px] font-semibold md:mb-7 mb-3">
            To find a Hive full of AI tools:
          </div>
  
          {/* List of steps */}
          <div className="space-y-4">
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="font-poppins text-gray-100 md:text-[19px] text-[17px] ml-2">Select your category</p>
            </div>
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="font-poppins text-gray-100 md:text-[19px] text-[17px] ml-2">Click Make Some Honey</p>
            </div>
            <div className="md:mb-2 mb-5 flex items-center">
              {renderCheckMark()}
              <p className="font-poppins text-gray-100 md:text-[19px] text-[17px] ml-2">
                Scroll Down to see the full list of AI tools relevant to your
                category
              </p>
            </div>
          </div>
          <Button className="hidden md:block mt-8 mb-10 md:mt-20 mt:5 rounded-2xl w-full md:w-[600px] bg-custom-yellow">
            <a href="#honeysection">
              <div className="mt-2 mb-2 justify-start items-start flex">
                <div className="mx-3 text-gray-950 md:text-[18px] text-[17px] font-poppins font-medium">Make some honey</div>
              </div>
            </a>
          </Button>
        </div>
        <div className="mt-10 md:mt-10 lg:order-last z-10">
          <HexagonTree
            selectedCategories={categories}
            handleCategorySelect={onCategorySelect}
          />
        </div>
        <Button className="md:hidden block mt-8 mb-10 md:mt-20 mt:10 rounded-2xl w-full md:w-[600px] bg-custom-yellow">
          <a href="#honeysection">
            <div className="mt-2 mb-2 justify-start items-start flex">
              <div className="mx-3 text-gray-950 md:text-[18px] text-[17px] font-poppins font-medium">Make some honey</div>
            </div>
          </a>
        </Button>
      </div>
      <div className="">
        <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-0 absolute bottom-0 right-0 opacity-20 rotate-180" loading="eager"/>
      </div>
    </section>
  );
}
  export default HeroSection;  