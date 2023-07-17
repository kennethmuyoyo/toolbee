'use client'

import React from 'react'
import LeftCol from './leftcol'
import RightCol from './rightcol'

const HomeSection: React.FC = ({ }) => {
  return (
        <div id="homesection" className=" mt-12 md:mt-1 bg-custom-purple px-8 flex flex-col items-center md:px-8 lg:justify-between lg:flex-row lg:pl-16 pt-14 pb-10">
            <LeftCol />
            <RightCol />
        </div>
  )
}

export default HomeSection
