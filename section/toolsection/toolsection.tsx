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
          <div className="font-league-spartan mb-8 w-full text-center text-orange-50 md:text-[40px] text-[27px] font-bold">
            YOUR HONEY POT OF AI TOOLS
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
                  <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
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
        />
          </div>
      </div>
    </div>
);

          }  

export default Toolsection
