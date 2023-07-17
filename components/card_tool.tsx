import { FC, useState } from 'react';
import Image from 'next/image';
import Button from './button';
import imageUrlBuilder from '@sanity/image-url';

interface CardProps {
    _id: string;
    name: string;
    image: any;
    link: string;
    category: string;
    description: string;
}

const builder = imageUrlBuilder({
    projectId: 'p4vhljql',
    dataset: 'production',
});

function urlFor(source: any) {
    return builder.image(source);
}

const Card: FC<CardProps> = ({ _id, name, image, link, category, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleReadMoreClick = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
      <>
          <div className="p-0 mb-5 w-full md:w-96 h-auto bg-yellow-500 rounded-3xl shadow-2xl gap-0">
              <a href={link}>
                <div className="relative h-48 w-full md:w-96 mb-4 rounded">
                  <Image src={urlFor(image).url()} alt={name} layout="fill" objectFit="cover" className="rounded-t-3xl" loading="eager" />
                  <div className="">
                    <Image src="/honey.svg" alt="tag" width="100" height="100" className="absolute -top-0 left-2"/>
                    <p className="font-poppins text-gray-900 text-[12px] font-bold absolute top-0 left-8">{category}</p>
            </div>
              </div>
              </a>
              <div className="mx-5 mb-2">
                  <span className="text-xs text-gray-300 bg-custom-purple px-2 py-1 rounded font-poppins">{category}</span>
              </div>
              <h2 className="mx-5 text-lg font-bold mb-2 font-poppins">{name}</h2>
              <div className="mx-5 text-sm mb-2 text-gray-800 overflow-hidden font-poppins">
                  <span className={showFullDescription ? '' : 'line-clamp-2 mb-2 font-poppins'}>{description}</span>
                  <a onClick={handleReadMoreClick} className="mt-4 text-blue-700 cursor-pointer"> Read {showFullDescription ? 'Less' : 'More'}</a>
              </div>
              <Button className="hover:bg-custom-purple hover:text-gray-200 font-poppins font-semibold text-sm ml-5 mt-4 mb-5 border-2 rounded-xl border-custom-purple" onClick={() => window.open(link, "_blank")}>
                  Visit Site
              </Button>
          </div>
      </>
  )
}

export default Card;