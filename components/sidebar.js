import React, { useState } from "react";

const Sidebar = ({ handleFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    handleFilterChange(filter);
  };

  return (
    <div className="fixed left-0 top-0 h-full bg-gray-200 w-64">
      <aside className="w-64 bg-gray-800 h-screen flex flex-col">
        <div className="p-4">
          <h2 className="text-white text-xl font-bold">Filtros</h2>
        </div>
        <nav className="flex-1">
          <ul className="py-2">
            <li
              className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                activeFilter === "nome" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleFilterClick("nome")}
            >
              Nome
            </li>
            <li
              className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                activeFilter === "tamanho" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleFilterClick("tamanho")}
            >
              Tamanho
            </li>
            <li
              className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                activeFilter === "cor" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleFilterClick("cor")}
            >
              Cor
            </li>
            <li
              className={`px-4 py-2 text-white hover:bg-gray-700 cursor-pointer ${
                activeFilter === "preco" ? "bg-gray-700" : ""
              }`}
              onClick={() => handleFilterClick("preco")}
            >
              Preço
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
