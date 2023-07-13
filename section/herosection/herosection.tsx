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
    <section className="mt-14 mx-4 md:mx-14">
      <div className="flex flex-col md:flex-row max-w-screen-xl px-4 py-8 md:gap-8 md:py-16">
        <div className="mt-8 mx-auto">
          <div className="font-league-spartan text-gray-100 md:text-[40px] text-[30px] font-bold mb-5">
            Choose your categories and make some honey.
          </div>
          <div className="font-league-spartan text-custom-yellow md:text-[40px] text-[30px] font-semibold mb-10">
            You will find your AI tools below!
          </div>
          <div className="font-league-spartan text-gray-100 text-[20px] md:text-[29px] font-semibold md:mb-7 mb-3">
            A Hive full of AI tools:
          </div>

          {/* List of steps */}
          <div className="space-y-4">
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="font-league-spartan text-gray-100 md:text-[20px] text-[18px] ml-2">Select your category</p>
            </div>
            <div className="flex items-center">
              {renderCheckMark()}
              <p className="font-league-spartan text-gray-100 md:text-[20px] text-[18px] ml-2">Click Make Some Honey</p>
            </div>
            <div className="md:mb-2 mb-5 flex items-center">
              {renderCheckMark()}
              <p className="font-league-spartan text-gray-100 md:text-[20px] text-[18px] ml-2">
                Scroll Down to see the full list of AI tools relevant to your
                category
              </p>
            </div>
          </div>
          <Button className="hidden md:block mb-10 md:mt-20 mt:5 rounded-2xl w-full md:w-[600px] bg-custom-yellow">
            <a href="#toolsection">
              <div className="mt-2 mb-2 justify-start items-start flex">
                <div className="mx-3 text-gray-950 md:text-[18px] font-poppins font-semibold">Make some honey</div>
              </div>
            </a>
          </Button>
        </div>
        <div className="mt-10 md:mt-10 lg:order-last">
          <HexagonTree
            selectedCategories={categories}
            handleCategorySelect={onCategorySelect}
          />
        </div>
        <Button className="md:hidden block mb-10 md:mt-20 mt:10 rounded-2xl w-full md:w-[600px] bg-custom-yellow">
            <a href="#toolsection">
              <div className="mt-2 mb-2 justify-start items-start flex">
                <div className="mx-3 text-gray-950 md:text-[20px] font-poppins font-semibold">Make some honey</div>
              </div>
            </a>
          </Button>
      </div> 
    </section>
  );
};

export default HeroSection;