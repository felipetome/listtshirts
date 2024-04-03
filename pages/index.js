import React, { useState } from "react";
import {
  getAllProducts,
  getProductsByColor,
  getProductsByPriceRange,
  getProductsBySize,
  getProductsOrderedByName,
} from "../service/service";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState(getAllProducts());
  const [filter, setFilter] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const router = useRouter();

  const handleFilterChange = (filter, value = null) => {
    setFilter(filter);

    switch (filter) {
      case "nome":
        setSelectedSize(null);
        setSelectedColor(null);
        setProducts(getProductsOrderedByName());
        break;
      case "tamanho":
        setSelectedSize(value);
        setSelectedColor(null);
        setProducts(getProductsBySize(value));
        break;
      case "cor":
        setSelectedSize(null);
        setSelectedColor(value);
        setProducts(getProductsByColor(value));
        break;
      case "preco":
        setSelectedSize(null);
        setSelectedColor(null);
        setProducts(getProductsByPriceRange());
        break;
      default:
        setSelectedSize(null);
        setSelectedColor(null);
        setProducts(getAllProducts());
        break;
    }
  };

  const handleSizeClick = (size) => {
    handleFilterChange("tamanho", size);
    setIsSizeOpen(false);
  };

  const handleColorClick = (color) => {
    handleFilterChange("cor", color);
    setIsColorOpen(false);
  };

  return (
    <div className="flex">
      <div className="w-1/5 h-screen">
      <aside className="w-full fixed md:w-auto lg:w-64 bg-gray-800 h-screen flex flex-col">
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">Filtros</h2>
          </div>
          <nav className="flex-1">
            <ul className="py-2">
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  filter === "nome" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleFilterChange("nome")}
              >
                Nome
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  filter === "preco" ? "bg-gray-700" : ""
                }`}
                onClick={() => handleFilterChange("preco")}
              >
                Preço
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  filter === "tamanho" ? "bg-gray-700" : ""
                }`}
                onClick={() => setIsSizeOpen(!isSizeOpen)}
              >
                Tamanho
                {isSizeOpen && (
                  <ul className="pl-4">
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSizeClick("P")}
                    >
                      P
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSizeClick("M")}
                    >
                      M
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSizeClick("G")}
                    >
                      G
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSizeClick("GG")}
                    >
                      GG
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                  filter === "cor" ? "bg-gray-700" : ""
                }`}
                onClick={() => setIsColorOpen(!isColorOpen)}
              >
                Cor
                {isColorOpen && (
                  <ul className="pl-4">
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Preto")}
                    >
                      Preto
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Branco")}
                    >
                      Branco
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Vermelho")}
                    >
                      Vermelho
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Verde")}
                    >
                      Verde
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Roxo")}
                    >
                      Roxo
                    </li>
                    <li
                      className="py-1 text-white hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleColorClick("Azul")}
                    >
                      Azul
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <div className="w-4/5 p-4">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-100 hover:bg-gray-100 hover:scale-105"
              >
                <Image
                  width={300}
                  height={300}
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full aspect-w-1 aspect-h-1 object-cover"
                  style={{ maxHeight: "263px" }}
                />
                <h2 className="text-lg font-semibold mt-2 text-gray-900">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-700">Tamanho: {product.size}</p>
                <p className="text-sm text-gray-700">Cor: {product.color}</p>
                <p className="text-sm text-gray-700">
                  Preço: R${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
