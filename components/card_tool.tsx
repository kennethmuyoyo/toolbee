// import { FC, useState } from 'react';
// import Image from 'next/image';
// import Button from './button';
// import imageUrlBuilder from '@sanity/image-url';
// import LinesEllipsis from 'react-lines-ellipsis';

// interface CardProps {
//     _id: string;
//     name: string;
//     image: any;
//     link: string;
//     category: string[]; // Updated to an array
//     description: string;
//     priceTag: string; 
// }

// const builder = imageUrlBuilder({
//     projectId: 'p4vhljql',
//     dataset: 'clean',
// });

// function urlFor(source: any) {
//     return builder.image(source);
// }

// const Card: FC<CardProps> = ({ _id, name, image, link, category, description, priceTag }) => {
//     const [showFullDescription, setShowFullDescription] = useState(false);

//     const handleReadMoreClick = () => {
//         setShowFullDescription(!showFullDescription);
//         console.log('showFullDescription:', !showFullDescription);

//     }

//     const formattedDescription = description.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
//     console.log('formattedDescription:', formattedDescription);
    
//     return (
//       <>
//           <style jsx>{`
//               li {
//                   list-style-type: none;
//                   background-image: url('/Check.png');
//                   background-repeat: no-repeat;
//                   background-position: 100 1%;
//                   padding-left: 32px;
//               }
//           `}</style>
//           <div className="p-0 mb-5 w-full md:w-96 h-auto bg-custom-yellow rounded-3xl shadow-2xl gap-0">
//               <a href={link}>
//                 <div className="relative h-48 w-full md:w-96 mb-4 rounded">
//                 <Image 
//                     src={image ? urlFor(image).url() : '/place.png'} 
//                     alt={name} 
//                     layout="fill" 
//                     objectFit="cover" 
//                     className="rounded-t-3xl" 
//                     loading="eager" 
//                 />                
//                 <div className="relative -top-0.5 left-4 h-24 w-24">
//                 <Image src="/honey.svg" alt="tag" layout="fill" objectFit="cover" className="absolute -top-0.5 left-20"/>
//                 <p className="pt-1 absolute inset-0 flex justify-center text-center font-poppins text-gray-900 text-[9px] font-semibold">{priceTag}</p>
//                 </div>
//               </div>
//               </a>
//               <div className="mx-5 mb-2">
//                   {category.map(cat => (
//                     <span key={cat} className="text-xs text-white bg-custom-purple px-2 mr-2 py-1 rounded font-poppins">{cat}</span>
//                   ))}
//               </div>
//               <h2 className="mx-5 text-lg font-bold mb-2 font-poppins">{name}</h2>
//               <div className="mx-5 text-sm mb-2 text-gray-800 overflow-hidden font-poppins">
//                   {showFullDescription ? (
//                       <ul className='py-2'>
//                           {formattedDescription.map((sentence, index) => (
//                               <li key={index}>{sentence}.</li>
//                           ))}
//                       </ul>
//                   ) : (
//                       <LinesEllipsis
//                           text={description}
//                           maxLine={2}
//                           ellipsis='...'
//                           trimRight
//                           basedOn='letters'
//                       />
//                   )}
//                   <a onClick={handleReadMoreClick} className="mt-4 text-blue-700 cursor-pointer"> Read {showFullDescription ? 'Less' : 'More'}</a>
//               </div>
//               <Button className="hover:bg-custom-purple hover:text-gray-200 font-poppins font-semibold text-sm ml-5 mt-4 mb-5 border-2 rounded-xl border-custom-purple" onClick={() => window.open(link, "_blank")}>
//                   Visit Site
//               </Button>
//           </div>
//       </>
//   )
// }

// export default Card;


import { FC, useState } from 'react';
import Image from 'next/image';
import Button from './button';
import imageUrlBuilder from '@sanity/image-url';

interface CardProps {
    _id: string;
    name: string;
    image: any;
    link: string;
    category: string[]; // Updated to an array
    description: string;
    priceTag: string; 
}

const builder = imageUrlBuilder({
    projectId: 'p4vhljql',
    dataset: 'clean',
});

function urlFor(source: any) {
    return builder.image(source);
}

const Card: FC<CardProps> = ({ _id, name, image, link, category, description, priceTag }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleReadMoreClick = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
      <>
          <div className="p-0 mb-5 w-full md:w-96 h-auto bg-yellow-500 rounded-3xl shadow-2xl gap-0">
              <a href={link}>
                <div className="relative h-48 w-full md:w-96 mb-4 rounded">
                <Image 
                    src={image ? urlFor(image).url() : '/place.png'} 
                    alt={name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-3xl" 
                    loading="eager" 
                />                
                <div className="relative -top-0.5 left-4 h-24 w-24">
                <Image src="/honey.svg" alt="tag" layout="fill" objectFit="cover" className="absolute -top-0.5 left-20"/>
                <p className="pt-1 absolute inset-0 flex justify-center text-center font-poppins text-gray-900 text-[9px] font-semibold">{priceTag}</p>
                </div>
              </div>
              </a>
              <div className="mx-5 mb-2">
                  {category.map(cat => (
                    <span key={cat} className="text-xs text-white bg-custom-purple px-2 mr-2 py-1 rounded font-poppins">{cat}</span>
                  ))}
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