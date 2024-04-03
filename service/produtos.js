// api/produtos.js
import productsData from './produtos.json';

export default function handler(req, res) {
  res.status(200).json(productsData);
}
