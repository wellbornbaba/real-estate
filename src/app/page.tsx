"use client";
import { useState } from "react";
// import SearchBar from "@/components/SearchBar";
import { properties } from "@/constant/data";
import Image from "next/image";
import { formatCurrency } from "@/constant/helper";
import { MdOutlineBedroomParent } from "react-icons/md";

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // const handleSearch = (query: string) => {
  //   const lowerQuery = query.toLowerCase();
  //   const results = properties.filter(
  //     (property) =>
  //       property.title.toLowerCase().includes(lowerQuery) ||
  //       property.location.toLowerCase().includes(lowerQuery) ||
  //       property.price.toString().includes(lowerQuery)
  //   );
  //   setFilteredProperties(results);
  // };

  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
            <div className="absolute -bottom-12 bg-teal-600 h-28 w-full rounded-3xl flex justify-center items-center px-5">
              {/* five colums containt label and input then the last should be submit button */}
              <div className="flex gap-4 w-full">
                <div className="flex flex-col items-start justify-end flex-1">
                  <label
                    htmlFor="location"
                    className="mb-1 text-sm font-medium"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Preferred location"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label htmlFor="price" className="mb-1 text-sm font-medium">
                    Price
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    id="price"
                    name="price"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label
                    htmlFor="property"
                    className="mb-1 text-sm font-medium"
                  >
                    Property
                  </label>
                  <input
                    type="text"
                    placeholder="Property Type"
                    id="property"
                    name="property"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label htmlFor="search" className="mb-1 text-sm font-medium">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search Properties"
                    id="search"
                    name="search"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <button className="w-full px-4 py-3 text-sm font-medium text-white bg-rose-600 rounded-md shadow hover:bg-rose-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white ">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 ">
        {/* <SearchBar onSearch={handleSearch} /> */}
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          {filteredProperties.map((property) => (
            <div key={property.id} className="border p-0 relative shadow-2xl rounded-br-xl rounded-bl-xl">
              <Image
                src={`${property.image}${property.id}.png`}
                alt={property.title}
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
                  &#8358;{formatCurrency(property.price)}
                </span>
              </div>

              <div className="py-2 flex justify-between items-center">
                <Image
                  src={`/gow1.png`}
                  alt={property.title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow2.png`}
                  alt={property.title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow3.png`}
                  alt={property.title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
                <Image
                  src={`/gow4.png`}
                  alt={property.title}
                  className="w-24 h-12 mr-1 rounded"
                  width={65}
                  height={45}
                />
              </div>
              <div className="px-2">
                <h2 className="text-lg font-bold">{property.title}</h2>
                <p className="text-gray-600">{property.location}</p>
                <div className="flex justify-center items-center">
                  <p className="text-sm font-medium text-gray-600">
                  <MdOutlineBedroomParent /> {property.bedrooms} Bedrooms • {property.bathrooms} Bathrooms •
                    {property.parking} Parking
                  </p>
                    <div className="flex gap-2">
                      <span className="text-sm font-medium text-gray-600">
                        {property.type}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {property.year}
                      </span>
      
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
