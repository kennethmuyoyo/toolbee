import axios from 'axios';
import { useEffect, useState } from 'react';
import Newscard from './news_card';

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

function NewsList() {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    console.log('Newslist component rendered.');
    const fetchNews = async () => {
      try {
        console.log('About to make axios call...');
        const res = await axios.get<{ page: number, value: NewsItem[], nextPage: number }>('https://ai10.p.rapidapi.com/news/machine-learning/page/1/', {
          headers: {
            'X-RapidAPI-Key': '951f4cafd3mshf5364d646aeedb4p1f23dejsn5ec9db37dd3d',
            'X-RapidAPI-Host': 'ai10.p.rapidapi.com',
          }
        });
        console.log('Response from API: ', res.data);
        const data = res.data.value
        .filter((item: NewsItem) => item.images !== null)
        .map((item: NewsItem) => ({
            id: item.path,
            title: item.title,
            link: item.webUrl,
            description: item.excerpt,
            image: item.images[0]?.url,
        }));    
        console.log('Transformed data: ', data);
        setNewsList(data);
      } catch (error) {
        console.error('Error with axios call: ', error);
      }
    };

    fetchNews();
  }, []);

  if (!newsList.length) {
    return <p>No news to display.</p>;
  }

  return (
    <div>
      {newsList.map((news: News) => (
        <Newscard key={news.id} news={news} />
      ))}
    </div>
  );
}

export default NewsList;
