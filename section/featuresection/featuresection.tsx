import React, { useState, useEffect } from 'react';
import FeatureCard from '@/components/card_feature';
import useSWR from 'swr';
import sanityClient from '@/sanityClient';
import Carousel from './carousel'; // import the Carousel component

interface FeatureProps {
  _id: string;
  name: string;
  image: string;
  link: string;
  rating: number;
  price: number;
  tag: string;
  description: string;
}

const fetcher = (query: string) => sanityClient.fetch(query)

const FeatureSection: React.FC = () => {
  const { data: features, error } = useSWR<FeatureProps[]>('*[_type == "features"]', fetcher)

  if (error) return <div>Failed to load</div>;
  if (!features) return <div>Loading...</div>;

  const cards = [
    ...features.map((feature) => (
      <div key={feature._id} className="mx-4 mb-5 flex justify-center items-center">
        <FeatureCard feature={feature} />
      </div>
    )),
    ...Array.from({ length: 3 - (features.length % 3) }).map((_, index) => (
      <div key={`empty-${index}`} />
    )),
  ];  

  return (
    <div className="mt-20 mb-10 flex justify-center items-center">
      <div className="w-full md:w-full">
        <div className="mb-5 w-full text-center text-orange-50 md:text-[40px] text-[27px] font-league-spartan font-bold">
          FEATURED AI TOOLS
        </div>
          <Carousel
            cards={features.map((feature) => (
              <div key={feature._id} className="mx-10 mb-20 flex justify-center items-center">
                <FeatureCard feature={feature} />
              </div>
            ))}
          />
        </div>
      </div>
  );
}

export default FeatureSection;
