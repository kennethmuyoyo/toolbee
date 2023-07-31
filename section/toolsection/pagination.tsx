import React from 'react';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage, sectionRef }) => {

    const handleClick = (number: number) => {
        paginate(number);
        if (sectionRef.current !== null) {
            sectionRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    const pagesToShow = (current: number, last: number) => {
        let delta = 2;
        let left = current - delta;
        let right = current + delta + 1;
        let range = [];
        let rangeWithDots = [];
        let l;

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }

    let totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                {pagesToShow(currentPage, totalPages).map((number, index) => (
                    <li key={index}>
                        {typeof number === 'number' ? (
                            <button onClick={() => handleClick(number)} className={`rounded-md flex items-center justify-center px-4 h-10 leading-tight text-gray-950 bg-custom-yellow border-custom-yellow ${number === currentPage ? 'text-blue-600 bg-blue-50' : 'hover:bg-yellow-500 hover:text-gray-700'}  `}>
                                {number}
                            </button>
                        ) : (
                            <div className="rounded-md flex items-center justify-center px-4 h-10 leading-tight text-gray-200">
                                {number}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
