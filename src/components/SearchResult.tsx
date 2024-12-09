"use client";
import { properties } from "@/constant/data";
import { SearchContext } from "@/context/SearchContect";
import React, { useContext, useEffect, useState } from "react";
import PropertiesCard from "./PropertiesCard";

type props = {
  propertyType?: any;
};

export default function SearchResult({ propertyType }: props) {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("SearchResults must be used within a SearchProvider");
  }

  const { searchQuery } = searchContext;
  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(lowerQuery) ||
        property.location.toLowerCase().includes(lowerQuery) ||
        property.price.toString().includes(lowerQuery) ||
        property.type.toLowerCase().includes(lowerQuery)
    );
    setFilteredProperties(results);
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    
    if (propertyType){
        const results = properties.filter((property) =>
        property.type.toLowerCase().includes(propertyType.toLowerCase())
        );
        setFilteredProperties(results);
    }
  }, [propertyType]);

  return (
    <section className=" bg-white ">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 ">
        {/* <SearchBar onSearch={handleSearch} /> */}
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          {filteredProperties.map((property, index) => (
            <PropertiesCard
              key={index}
              slug={property.slug}
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
          ))}
        </div>
      </div>
    </section>
  );
}
