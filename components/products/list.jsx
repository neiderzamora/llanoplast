import Image from "next/image";
import { PRODUCTS } from "@/utils/products";

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default function ListProducts({ results }) {
  const showAllProducts = results === undefined;
  const productsToShow = showAllProducts ? PRODUCTS : results;

  console.log(results)

  return (
    <div className="bg-white grid min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-5rem)] xl2:lg:min-h-[calc(100vh-6rem)] place-items-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {results && results.length === 0 && (
          <p className="text-black w-full">No se han encontrado Resultados</p>
        )}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsToShow.map((product) => (
            <div key={product.id} className="group">
              <div className="flex justify-center items-center overflow-hidden p-2 border sm:p-3 lg:p-2 rounded-md sm:rounded-xl bg-white h-[25rem] max-w-[26rem] sm:h-[22rem] sm:max-w-[25rem] lg:h-[24rem] lg:max-w-[20rem] hover:border-2">
                <Image
                  height={250}
                  width={250}
                  src={product.imageSrc}
                  alt={product.name}
                  className="group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700 px-2">
                {toTitleCase(product.name)}
              </h3>
              {product.variation.length > 0 && (
                <div className="text-gray-700 bg-orange-200/40 rounded-lg py-1 px-2 my-3">
                  <span>Variación</span>
                  <p className="mt-1 text-sm font-medium text-orange-800/50">
                    {product.variation.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}