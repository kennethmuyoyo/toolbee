import axios from 'axios';
import { useEffect, useState } from 'react';
import Newscard from '@/components/news/news_card';
import Pagination from '@/section/toolsection/pagination';


interface Image {
    url: string;
  }
  
  interface NewsItem {
    path: string;
    title: string;
    webUrl: string;
    excerpt: string;
    images: Image[];
  }
  
  interface News {
    id: string;
    title: string;
    link: string;
    description: string;
    image: string;
  }
  
  const Newssection: React.FC = () => {
    const [newsList, setNewsList] = useState<News[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const res = await axios.get<{ page: number, value: NewsItem[], nextPage: number }>('https://ai10.p.rapidapi.com/news/machine-learning/page/1/', {
            headers: {
              'X-RapidAPI-Key': '951f4cafd3mshf5364d646aeedb4p1f23dejsn5ec9db37dd3d',
              'X-RapidAPI-Host': 'ai10.p.rapidapi.com',
            }
          });
          const data = res.data.value
          .filter((item: NewsItem) => item.images !== null)
          .map((item: NewsItem) => ({
              id: item.path,
              title: item.title,
              link: item.webUrl,
              description: item.excerpt,
              image: item.images[0]?.url,
          }));
          setNewsList(data);
        } catch (error) {
          console.error('Error with axios call: ', error);
        }
      };
  
      fetchNews();
    }, []);
  
    if (!newsList.length) {
      return <p>Loading news...</p>;
    }
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsList.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    return (
      <div className="flex justify-center items-center">
      <div className="w-3/4 md:w-full">
          <div className="mb-8 w-full text-center text-orange-50 md:text-[32px] text-[22px] font-semibold">
            LATEST AI NEWS
          </div>    
          <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentItems.map((news) => (
              <Newscard key={news.id} news={news} />
            ))}
          </div>
        </div> 
        <div className="mt-5 mb-5 flex justify-center items-center">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={newsList.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          </div>
      </div>
      </div>
    );
  };
  
  export default Newssection;