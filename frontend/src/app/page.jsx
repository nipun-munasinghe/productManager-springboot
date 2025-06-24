'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/products/${id}`, { method: 'DELETE' })
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(err => console.error('Error deleting product:', err));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link href="/add-product">
        <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded">Add Product</button>
      </Link>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">
                <Link href={`/edit-product/${product.id}`}>
                  <button className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                </Link>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
