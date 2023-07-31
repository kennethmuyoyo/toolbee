import React from 'react';
import Image from 'next/image';

interface News {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
}

interface NewsCardProps {
  news: News;
}

const Newscard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="max-w-sm bg-gray-300 rounded-lg shadow-2xl">
      <a href={news.link}>
        <img src={news.image || "/honey_dipper.svg"} alt="news" width={500} height={300} className="h-48 w-96 object-cover rounded-t-lg" />
      </a>
      <div className="p-5">
        <a href={news.link}>
          <h5 className="font-poppins mb-2 text-xl font-medium tracking-tight text-gray-900">{news.title}</h5>
        </a>
        <p className="mb-3 font-poppins text-[14px] font-normal text-gray-700">{news.description}</p>
        <a
          href={news.link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-purple rounded-lg hover:bg-custom-yellow"
        >
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Newscard;
