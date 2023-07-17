import React from 'react';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '@/motion'; 
import Image from 'next/image';

function LeftCol({onClick}: {onClick?: () => void}) {
  return (
    <motion.div className="mt-12 items start justify-center h-full pt-20 flex flex-col w-full justify-left md:w-2/3">
      <div className="">
            <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-0 absolute -top-0 -left-0.5 opacity-20" loading="eager"/>
          </div>
          <motion.div {...headTextAnimation} className="text-left">
    
        <div className="mt-8 font-poppins text-gray-100 md:text-[35px] text-[25px] font-semibold mb-5">
            The only <span className='text-custom-yellow'>Al worker bee</span> who is finding the right tools for you, honey! 
          </div>
        
      </motion.div>
      <motion.div {...headContentAnimation} className="mt-8 font-poppins text-gray-100 text-[20px] md:text-[25px] font-medium md:mb-7 mb-3">
        <p>A Hive Full of Al Tools</p>
      </motion.div>
      <Button className="z-20 mb-10 mt-8 md:mt-20 mt:5 rounded-2xl w-2/3 md:w-[400px] bg-custom-yellow">
            <a href="#toolsection">
              <div className="mt-2 mb-2 justify-start items-start flex">
                <div className="mx-3 text-gray-950 md:text-[18px] font-poppins font-medium">Search Tools</div>
              </div>
            </a>
          </Button>
          <div className="">
            <Image src="/honeycomb.svg" alt="tag" width="500" height="500" className="z-0 absolute -bottom-0 -right-0.5 opacity-20 rotate-180" loading="eager"/>
          </div>
              </motion.div>
              
  )
}

export default LeftCol;
