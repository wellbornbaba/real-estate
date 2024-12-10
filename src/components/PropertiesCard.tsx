"use client"
import React from "react";
import Image from "next/image";
import { formatCurrency } from "@/constant/helper";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaImages } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { BsBadge3D } from "react-icons/bs";
import { TbCarGarage } from "react-icons/tb";
import { useRouter } from "next/navigation";


type PropertiesProps = {
  id: number;
  slug: string;
  title: string;
  price: number;
  image: any;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  garages?: number;
  parking: number;
  year: number;
  description?: string;
};

export default function PropertiesCard({
  id,
  slug,
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
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/property/${slug}`);
  };


  return (
    <div
      key={id}
      className="border p-0 relative shadow-2xl rounded-br-xl rounded-bl-xl cursor-pointer"
      onClick={() => handleNavigation(slug) }
    >
      <Image
        src={`${image[1]}`}
        alt={title}
        className="w-full h-48 object-cover"
        width={500}
        height={450}
      />
      <div className="absolute flex p-2 justify-between items-start z-50 top-1 w-full">
        <div>
          <FaImages size={24} />
          <IoIosVideocam size={24} />
          <CiLocationOn size={24} />
          <BsBadge3D size={24} />
        </div>

        <span className=" bg-slate-100 rounded text-teal-600  font-extrabold px-2">
          &#8358;{formatCurrency(price)}
        </span>
      </div>

      <div className="py-2 flex justify-between items-center px-1">
        {image.map((img: any, index: string) => (
          <Image
          key={index}
            src={img}
            alt={title}
            className="w-24 h-12 mr-1 rounded"
            width={65}
            height={45}
          />
        ))}
      </div>
      <div className="px-2">
        <h2 className="text-lg font-bold text-gray-700">
          {title}
          <span className="text-sm font-bold text-gray-400 ml-2">({type})</span>
        </h2>

        <p className="text-gray-600 flex flex-row items-center">
          <CiLocationOn className="mr-1" size={14} />
          <span className="ml-1 text-sm">{location}</span>
        </p>
        <div className="flex justify-between items-center pb-5 my-1 ">
          <div className="text-xs font-medium text-gray-400 flex flex-row items-center mr-4">
            <MdOutlineBedroomParent size={14} />
            <span className="ml-1">{bedrooms} Bedrooms </span>
          </div>
          <div className="text-xs font-medium text-gray-400 flex flex-row items-center mr-4">
            <MdOutlineBedroomParent size={14} />
            <span className="ml-1">{bathrooms} Bathrooms </span>
          </div>
          <div className="text-xs font-medium text-gray-400 flex flex-row items-center mr-4">
            <TbCarGarage size={14} />
            <span className="ml-1">{parking} Parking </span>
          </div>
          <div className="text-xs font-medium text-gray-400 flex flex-row items-center mr-4">
            <CiCalendarDate size={14} />
            <span className="ml-1">{year} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
