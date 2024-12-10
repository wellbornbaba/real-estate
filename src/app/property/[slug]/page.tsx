import PropertiesCard from "@/components/PropertiesCard";
import { properties } from "@/constant/data";
import { formatCurrency } from "@/constant/helper";
import Image from "next/image";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbCarGarage } from "react-icons/tb";


export const metadata = {
  title: "",
  description: "",
  keywords: `company, services`,
};

interface PropertyPageProps {
  params: {
    slug: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const {slug } = await params;
  const propertyData = properties.find(
    (property) => property.slug === slug
  );

  if (!propertyData) {
    throw new Error("Property not found"); // or redirect to 404 page or similar
  }

  const {
    title,
    description,
    location,
    price,
    type,
    image,
    bedrooms,
    bathrooms,
    parking,
    year,
  } = propertyData;

  metadata.title = `${title} ${formatCurrency(price)}`;
  metadata.description = `${title} - ${location} ${formatCurrency(price)}`;
  metadata.keywords = `${title}, ${location}, ${type}`;

  // get related properties
  const relatedProperties = properties
    .filter(
      (property) =>
        property.id !== propertyData.id && property.location === location
    )
    .slice(0, 3);

  return (
    <>
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className=" rounded-lg bg-gray-200 lg:col-span-2">
            <div className="flex items-center justify-between bg-teal-200 text-black px-4 py-5">
              <h1 className="text-3xl font-bold text-teal-900">{title}</h1>
              <div className="flex gap-3">
                <span className="text-3xl font-extrabold text-teal-900">
                  &#8358;{formatCurrency(price)}
                </span>
              </div>
            </div>
            <div className="border p-0 relative shadow-2xl rounded-br-xl rounded-bl-xl">
              <Image
                src={`${image[1]}`}
                alt={title}
                className="w-full h-full object-cover"
                width={500}
                height={650}
              />

              <div className="py-2 flex justify-between items-center px-1 overflow-hidden">
                {image.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={title}
                    className="w-fit h-fit mr-1 rounded"
                    width={165}
                    height={145}
                  />
                ))}
              </div>
              <div className="px-2">
                <h2 className="text-xl font-bold text-gray-700">{type}</h2>

                <p className="text-gray-600 flex flex-row items-center">
                  <CiLocationOn className="mr-1" size={24} />
                  <span className="ml-1 text-lg">{location}</span>
                </p>
                <div className="flex justify-between items-center pb-5 my-1 ">
                  <div className="text-lg font-medium text-gray-700 flex flex-row items-center mr-4">
                    <MdOutlineBedroomParent size={24} />
                    <span className="ml-1">{bedrooms} Bedrooms </span>
                  </div>
                  <div className="text-lg font-medium text-gray-700 flex flex-row items-center mr-4">
                    <MdOutlineBedroomParent size={24} />
                    <span className="ml-1">{bathrooms} Bathrooms </span>
                  </div>
                  <div className="text-lg font-medium text-gray-700 flex flex-row items-center mr-4">
                    <TbCarGarage size={24} />
                    <span className="ml-1">{parking} Parking </span>
                  </div>
                  <div className="text-lg font-medium text-gray-700 flex flex-row items-center mr-4">
                    <CiCalendarDate size={24} />
                    <span className="ml-1">{year} </span>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center p-4">
                <h3 className="text-2xl font-bold text-gray-700 py-3">
                  Description
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4 shadow-md">
  <h1 className="text-black text-xl font-bold text-center mb-2">Advertisement</h1>
  <p className="text-gray-700 text-center">Left Side</p>
</div>

        </div>
        <section className="my-14">
          <h2 className="text-2xl font-bold text-gray-600">Related Properies</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {relatedProperties ? (
              relatedProperties.map((property, index) => (
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
              ))
            ) : (
              <div className="text-lg ">No Record</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
