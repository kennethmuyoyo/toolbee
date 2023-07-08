'use client'

import React from 'react'
import Image from 'next/image'
import Button from './button'

interface CardProps {
    id: number;
    name: string;
    image: string;
    link: string;
    category: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, name, image, link, category, description }) => {
    return (
      <>
      <div className="p-4 w-96 h-auto bg-yellow-500 border-yellow-400 border rounded-lg shadow-2xl gap-0">
        <div className="relative h-48 w-full mb-4 rounded">
          <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded" />
        </div>
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm mb-2">{description}</p>
        <p className="text-xs text-gray-600 mb-2">{category}</p>
        <Button className="mt-4" onClick={() => window.open(link, "_blank")}>
          Visit Site
        </Button>
      </div>
      </>
    )
  }

export default Card
