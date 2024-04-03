// service.js
import productsData from "./produtos.json";

export function getAllProducts() {
  return productsData.products;
}

export function getProductById(id) {
  return productsData.products.find((product) => product.id === id);
}

export function getProductsByColor(color) {
  return productsData.products.filter((product) => product.color === color);
}

export function getProductsByPriceRange() {
    return productsData.products.slice().sort((a, b) => a.price - b.price);
  }
  

export function getProductsBySize(size) {
  return productsData.products.filter((product) => product.size === size);
}

export function getProductsOrderedByName(products) {
  return productsData.products.slice().sort((a, b) => a.title.localeCompare(b.title));
}

