import React, { useState, useEffect, useRef } from 'react'
import Card from '@/components/card_tool'
import useSWR from 'swr'
import sanityClient from '@/sanityClient'
import Pagination from './pagination'; 
import Image from 'next/image';

interface CardProps {
  _id: string;
  name: string;
  image: string;
  link: string;
  category: string[];
  description: string;
  priceTag: string;
}

interface ToolSectionProps {
  selectedCategories: string[];
}

const fetcher = (query: string) => sanityClient.fetch(query)

const Toolsection: React.FC<ToolSectionProps> = ({ selectedCategories }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { data: cards, error } = useSWR<CardProps[]>('*[_type == "aitools"]', fetcher)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // initialize to default large screen value



  useEffect(() => {
    const getItemsPerPage = () => {
      const { innerWidth: width } = window;
      if (width <= 640) {
        return 3; // 3 items per page on mobile
      } else if (width <= 1024) {
        return 4; // 4 items per page on medium screens
      } else {
        return 6; // 6 items per page on large screens
      }
    }

    setItemsPerPage(getItemsPerPage());

    const debounce = (fn: (...args: any[]) => void, ms: number): ((...args: any[]) => void) => {
      let timer: any;
      return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          fn.apply(this, args);
        }, ms);
      };
    };    
    
    const handleResize = debounce(() => {
      setItemsPerPage(getItemsPerPage());
    }, 250);
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (error) return <div>Failed to load</div>
  if (!cards) return (
    <div className="flex justify-center items-center">
      <svg className="animate-spin h-10 w-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 4s16 16 16 0-16-16-16 0z"></path>
      </svg>
    </div>
  )

  let filteredCards = cards;
  if (!selectedCategories.includes('All')) {
    filteredCards = cards.filter(card => card.category.some(c => selectedCategories.includes(c)));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCards.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div ref={sectionRef} className="relative flex justify-center items-center">
      <div className="w-3/4 md:w-full">
          <div id="honeysection" className="pt-24 font-league-spartan mb-8 w-full text-center text-orange-50 md:text-[40px] text-[27px] font-bold">
            YOUR HONEY POT OF AI TOOLS
            <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="-z-20 absolute -top-0 -left-14 opacity-30" loading="eager"/>

          </div>    
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4">
              {selectedCategories.length > 0 ? 
              currentItems.map((card) => (
                <Card key={card._id} {...card} />
              ))
              :
                <div className="col-span-3 flex justify-center items-center">
                <div className="relative flex flex-col items-center justify-center mx-auto space-y-4">
                  <div className='md:text-[20px] font-poppins font-semibold text-gray-400'>Please select a category from the hives above to see the related tools.</div>
                  <div role="status">
                    <svg className="animate-spin h-10 w-10 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 4s16 16 16 0-16-16-16 0z"></path>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
              }
            </div>
        </div> 
        <div className="flex justify-center items-center">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredCards.length}
            paginate={paginate}
            currentPage={currentPage}
            sectionRef={sectionRef}

        />
        <div className="">
        <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-0 absolute bottom-0 right-0 opacity-30 rotate-180" loading="eager"/>
      </div>
          </div>
      </div>
    </div>
  )
}  

export default Toolsection
