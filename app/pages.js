// pages/tailwind-example.js
import React from "react";

const TailwindExample = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Exemplo de Uso do Tailwind CSS
        </h1>
        <p className="text-gray-700">
          Este é um exemplo de uma página estilizada com o Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Botão
        </button>
      </div>
    </div>
  );
};

export default TailwindExample;
