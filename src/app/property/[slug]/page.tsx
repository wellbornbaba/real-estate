import { properties } from "@/constant/data";
import { formatCurrency } from "@/constant/helper";

export const metadata = {
  title: "",
  description: "",
  keywords: `company, services`,
};

export default function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params.slug) {
    throw new Error("Property not found"); // or redirect to 404 page or similar
  }
  const propertySlug = params.slug;
  const propertyData = properties.find(
    (property) => property.slug === propertySlug
  );

  if (!propertyData) {
    throw new Error("Property not found"); // or redirect to 404 page or similar
  }
  metadata.title = `${propertyData.title} ${formatCurrency(propertyData.price)}`;
  metadata.description = `${propertyData.title} - ${propertyData.location} ${formatCurrency(propertyData.price)}`;
  metadata.keywords = `${propertyData.title}, ${propertyData.location}, ${propertyData.type}`;
  //   const [property, setProperty] = useState<PropertiesProps | null>(propertyData);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2">
          <div className="p-6">
            <h1 className="text-3xl font-bold">{propertyData.title}</h1>
            <p className="text-gray-700 my-4">{propertyData.description}</p>
            <p className="text-lg font-semibold">Price: {propertyData.price}</p>

           
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
      <section className="mt-6">
              <h2 className="text-2xl font-bold">Reviews</h2>
              <div className="space-y-4 mt-4"></div>
            </section>
    </div>
  );
}
