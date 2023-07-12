import React, { useState, useEffect } from 'react'
import Card from '@/components/card_tool'
import useSWR from 'swr'
import sanityClient from '@/sanityClient'
import Pagination from './pagination'; // Assume that you have a Pagination component

interface CardProps {
  _id: string;
  name: string;
  image: string;
  link: string;
  category: string;
  description: string;
}

interface ToolSectionProps {
  selectedCategories: string[];
}

const fetcher = (query: string) => sanityClient.fetch(query)

const Toolsection: React.FC<ToolSectionProps> = ({ selectedCategories }) => {
  const { data: cards, error } = useSWR<CardProps[]>('*[_type == "tools"]', fetcher)
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
  if (!cards) return <div>Loading...</div>

  const filteredCards = cards.filter(card => selectedCategories.includes(card.category));
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCards.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex justify-center items-center">
    <div className="w-3/4 md:w-full">
        <div className="mb-8 w-full text-center text-orange-50 md:text-[32px] text-[22px] font-semibold">
          YOUR HONEY POT OF AI TOOLS
        </div>    
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentItems.map((card) => (
            <Card key={card._id} {...card} />
          ))}
        </div>
       
      </div> 
      <div className="flex justify-center items-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredCards.length}
          paginate={paginate}
        />
        </div>
    </div>
    </div>
  );
          }  

export default Toolsection
