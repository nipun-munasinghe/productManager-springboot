'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import '../../globals.css';

export default function EditProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  
  // Get ID safely
  const id = params?.id;

  useEffect(() => {
    // Only fetch if ID exists
    if (id) {
      fetch(`http://localhost:8080/api/products/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch product');
          return res.json();
        })
        .then(data => {
          setName(data.name);
          setPrice(data.price.toString());
          setDescription(data.description);
        })
        .catch(err => {
          console.error('Error fetching product:', err);
          router.push('/'); // Redirect on error
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id, router]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:8080/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        id: id,
        name, 
        price: parseFloat(price), 
        description 
      })
    });
    
    if (!response.ok) throw new Error('Failed to update product');
    router.push('/');
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

  // Handle missing ID
  if (!id) {
    return (
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link href="/">
            <button className="bg-gray-500 text-white px-4 py-2 rounded">← Back to Products</button>
          </Link>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: Product ID is missing
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link href="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">← Back to Products</button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input 
            type="number" 
            step="0.01"
            value={price} 
            onChange={e => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
}