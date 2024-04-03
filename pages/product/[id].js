import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllProducts } from "../../service/service";
import Image from "next/image";
import Header from "../../components/header";

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const id = parseInt(router.query.id, 10);

      if (id) {
        console.log("id", id);
        const products = await getAllProducts();
        console.log("products", products);
        const foundProduct = products.find((p) => p.id === id);
        console.log("foundProduct", foundProduct);
        setProduct(foundProduct);
      }
    };

    fetchProduct();
  }, [router.query.id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  console.log("product", product.thumbnail);
  const colorClasses = {
    Branco: "border-black bg-white",
    Preto: "bg-gray-800 dark:bg-gray-200",
    Azul: "bg-blue-500 dark:bg-blue-700",
    Verde: "bg-green-500 dark:bg-green-700",
    Vermelho: "bg-red-500 dark:bg-red-700",
    Roxo: "bg-purple-500 dark:bg-purple-700",
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                  src={product.thumbnail}
                  width={460}
                  height={460}
                  alt="Product Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Preço:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {" "}
                    R${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Cor disponível:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.color}
                </span>
                <div className="flex items-center mt-2">
                  <span
                    className={`w-6 h-6 rounded-full mr-2 ${
                      colorClasses[product.color]
                    }`}
                  ></span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Tamanho disponível:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    {product.size}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
