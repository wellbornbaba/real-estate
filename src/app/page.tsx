"use client";
import { useContext, useEffect, useState } from "react";
// import SearchBar from "@/components/SearchBar";
import { properties } from "@/constant/data";
import HomeHero from "@/components/HomeHero";
import PropertiesCard from "@/components/PropertiesCard";
import { SearchContext } from '@/context/SearchContect';

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const searchContext = useContext(SearchContext)
  if (!searchContext) {
    throw new Error('SearchResults must be used within a SearchProvider');
  }

  const { searchQuery } = searchContext;
  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(lowerQuery) ||
        property.location.toLowerCase().includes(lowerQuery) ||
        property.price.toString().includes(lowerQuery) || 
        property.type.toString().includes(lowerQuery)
    );
    setFilteredProperties(results);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <HomeHero />
      <section className=" bg-white ">
        <h1>{searchQuery}</h1>
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 ">
        {/* <SearchBar onSearch={handleSearch} /> */}
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          {filteredProperties.map((property, index) => 
            <PropertiesCard key={index}
              title={property.title} 
              id={property.id} 
              price={property.price} 
              image={property.image} 
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              location={property.location}
              year={property.year}
              type={property.type}
              parking={property.parking}
            />
          )}
        </div>
      </div>
      </section>
    </>
  );
}
