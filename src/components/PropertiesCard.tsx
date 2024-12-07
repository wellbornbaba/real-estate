import React from 'react'
import Image from "next/image";
import { formatCurrency } from '@/constant/helper';
import { MdOutlineBedroomParent } from 'react-icons/md';

type PropertiesProps = {
    id: number;
    title: string;
    price: number;
    image: string;
    location: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    garages?: number;
    parking: number;
    year: number;
    description?: string;
}

export default function PropertiesCard({
    id,
    title,
    price,
    image,
    location,
    type,
    bedrooms,
    bathrooms,
    garages,
    parking,
    year,
    description,
  }: PropertiesProps) {
  return (
    <div key={id} className="border p-0 relative shadow-2xl rounded-br-xl rounded-bl-xl">
              <Image
                src={`${image}${id}.png`}
                alt={title}
                className="w-full h-48 object-cover"
                width={500}
                height={450}
              />
              <div className="absolute flex p-2 justify-between items-start z-50 top-1 w-full">
                <div>
                  <p>ImageIcon</p>
                  <p>VideoIcon</p>
                  <p>LocationIcon</p>
                  <p>3DIcon</p>
                </div>

                <span className=" bg-slate-100 rounded text-teal-600  font-extrabold px-2">
                  &#8358;{formatCurrency(price)}
                </span>
              </div>

              <div className="py-2 flex justify-between items-center">
                <Image
                  src={`/gow1.png`}
                  alt={title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow2.png`}
                  alt={title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow3.png`}
                  alt={title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow4.png`}
                  alt={title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
              </div>
              <div className="px-2">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600">{location}</p>
                <div className="flex justify-center items-center">
                  <p className="text-sm font-medium text-gray-600">
                  <MdOutlineBedroomParent /> {bedrooms} Bedrooms • {bathrooms} Bathrooms •
                    {parking} Parking
                  </p>
                    <div className="flex gap-2">
                      <span className="text-sm font-medium text-gray-600">
                        {type}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {year}
                      </span>
      
                    </div>
                </div>
              </div>
            </div>
  )
}
