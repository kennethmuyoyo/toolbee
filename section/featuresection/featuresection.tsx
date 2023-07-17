import React, { useState, useEffect } from 'react';
import FeatureCard from '@/components/card_feature';
import useSWR from 'swr';
import sanityClient from '@/sanityClient';
import Carousel from './carousel'; 
import Image from 'next/image';

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
    <div className="relative mt-20 mb-10 flex justify-center items-center">
      <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-2 absolute top-0 -left-0 opacity-20" loading="eager"/>
  
      <div className="w-full md:w-full">
        <h1 id="featuresection" className="pt-24 mb-5 w-full text-center text-orange-50 md:text-[40px] text-[27px] font-league-spartan font-bold">
          FEATURED AI TOOLS
        </h1>
          <Carousel
            cards={features.map((feature) => (
              <div key={feature._id} className="mx-10 mb-20 flex justify-center items-center">
                <FeatureCard feature={feature} />
              </div>
            ))}
          />
        </div>
        <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="-z-10 absolute bottom-0 -right-0 opacity-20 rotate-180" loading="eager"/>
    </div>
  );
            }  

export default FeatureSection;
