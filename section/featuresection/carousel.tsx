import React, { useState, useEffect } from 'react';

interface CarouselProps {
  cards: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const handleNextClick = () => {
    const nextIndex = currentCardIndex + (window.innerWidth < 640 ? 1 : cardsToShow);
    if (nextIndex < cards.length) {
      setCurrentCardIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = currentCardIndex - (window.innerWidth < 640 ? 1 : cardsToShow);
    if (prevIndex >= 0) {
      setCurrentCardIndex(prevIndex);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentCardIndex(index * cardsToShow);
  };

  const handleResize = () => {
    setCardsToShow(window.innerWidth < 640 ? 1 : 3);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const numberOfDots = Math.ceil(cards.length / cardsToShow);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="flex transition-all duration-300"
           style={{ transform: `translateX(-${currentCardIndex * (100 / cardsToShow)}%)` }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-1/3`}
          >
            {card}
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        {/* <span className="hidden lg:block">Prev</span> */}
        <span className="">          <svg className="w-3.5 h-3.5 ml-2 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
    />
</svg></span>
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        {/* <span className="hidden lg:block">Prev</span> */}
        <span className="">          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg></span>
      </button>
      <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              index * cardsToShow === currentCardIndex ? 'bg-custom-yellow' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
