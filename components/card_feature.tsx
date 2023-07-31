import React, { useState } from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface Feature {
  _id: string;
  name: string;
  image: any;
  rating: number;
  price: number;
  link: string;
  tag: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing Sanity environment variables.');
}

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

function urlFor(source: any) {
  return builder.image(source);
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFullDescription(!showFullDescription);
  }

  return (
    <div className="mx-4 md:w-80 min-h-96 w-full rounded-lg bg-stone-950 shadow-xl hover:shadow-gray-500/40 shadow-custom-yellow/20 my-5">
      <a href={feature.link}>
        <div className="relative h-48 w-full md:w-80 p-8 rounded-t-lg">
          <Image src={urlFor(feature.image).url()} alt="product image" layout="fill" objectFit="cover" className="rounded-t-lg" loading="eager" />
          <div className="absolute -top-0.5 left-4 h-24 w-24">
                <Image src="/honey.svg" alt="tag" layout="fill" objectFit="cover" className=""/>
                <p className="pt-1 absolute inset-0 flex justify-center text-center font-poppins text-gray-900 text-[9px] font-semibold pl-2">{feature.price}</p>
                </div>
        </div>
      </a>
      <div className="px-5 pb-5">
        <a href={feature.link}>
          <h5 className="mt-4 text-xl font-semibold tracking-tight font-poppins text-gray-200">{feature.name}</h5>
        </a>
        <div className="text-sm mb-2 text-gray-400 overflow-hidden font-poppins">
          <span className={showFullDescription ? '' : 'line-clamp-2 mb-2'}>{feature.description}</span>
          <a href="#" onClick={handleReadMoreClick} className="mt-4 text-blue-700 cursor-pointer font-poppins"> Read {showFullDescription ? 'Less' : 'More'}</a>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < feature.rating ? <FaStar color='white' /> : <FaRegStar color='gray' />}  </span>
            ))}
          </div>
          <a href={feature.link} className="text-gray-200 bg-custom-purple hover:bg-custom-yellow hover:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 font-poppins text-center">Visit Site</a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
