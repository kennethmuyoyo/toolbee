import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function RightCol() {

  return (
        <div className="z-40 md:mb-10 md:pl-20 bg-transparent md:justify-right md:items-right md:w-full">
            <Image
              className=''
              src="/bee.png"
              width="1200"
              height="1200"
              alt=""
              loading='eager'
            />
          </div>
  
  );
}

export default RightCol;