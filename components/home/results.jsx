"use client";

import { useState } from "react";
import { PRODUCTS } from "@/utils/products";
import ListProducts from "../products/list";
import Navbar from "../navbar/navbar";

const Results = () => {
  const [results, setResults] = useState(undefined);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setResults(undefined); // Resetea los resultados a undefined cuando la búsqueda está vacía
    } else {
      const filteredResults = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const filterProductsByCategory = (category) => {
    if (category === "Todos") {
      setResults(undefined); // Mostrar todos los productos
    } else {
      const filteredResults = PRODUCTS.filter(product =>
        product.category === category
      );
      setResults(filteredResults);
    }
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} filterProductsByCategory={filterProductsByCategory} />
      <ListProducts results={results} />
    </>
  );
};

export default Results;
