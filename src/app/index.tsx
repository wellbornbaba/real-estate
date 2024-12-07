import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { properties } from "@/constant/data";
import Image from "next/image";

export default function Home() {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const results = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(lowerQuery) ||
        property.location.toLowerCase().includes(lowerQuery) ||
        property.price.toString().includes(lowerQuery)
    );
    setFilteredProperties(results);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredProperties.map((property) => (
          <div key={property.id} className="border p-4">
            <Image
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold">{property.title}</h2>
            <p>{property.location}</p>
            <p>${property.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
