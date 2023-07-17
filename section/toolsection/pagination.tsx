import React from 'react';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage, sectionRef }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (number: number) => {
        paginate(number);
        if (sectionRef.current !== null) {
          sectionRef.current.scrollIntoView({
            behavior: "smooth"
          });
        }
      };

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => handleClick(number)} className={` rounded-md flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-custom-yellow border-custom-yellow ${number === currentPage ? 'text-blue-600 bg-blue-50' : 'hover:bg-gray-100 hover:text-gray-700'} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
