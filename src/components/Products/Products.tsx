import React from 'react'
import { Link } from 'react-router-dom';
import { products } from 'pages/productsList';

export default function AllProducts() {
  const { others, shoes } = products;
  const preview = [
    others[14],
    shoes[7],
    others[16],
    shoes[90],
    others[18],
    shoes[16],
    others[10],
    shoes[15],
  ];
  return (
      <section className="text-gray-400 bg-gray-800 body-font">
  <div className="container sm:px-4 px-4 sm:py-8 py-4 mx-auto">
  <h1 className="lg:text-5xl text-2xl text-center f-m-w text-gray-100 font-extrabold">
            Our Products
          </h1>
          <div className="flex flex-row justify-between px-4 text-lg sm:text-xl py-4">
            <h1 className="lg:text-3xl text-xl text-center f-m-w text-gray-100 font-medium">
              All Collections
            </h1>
            <Link className="text-pink-700" to="/products">
              View All
            </Link>
          </div>
    <div className="flex flex-wrap -m-4">
    {
      preview?.map((product,index)=>(
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
        <a className="block relative h-60 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block transition-all transform hover:scale-105" src={product.image} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY: {product.category}</h3>
          <h2 className="text-gray-100 title-font text-lg font-medium">{product.name}</h2>
          <p className="mt-1">#30000</p>
          <Link to={`/product/${product.category}/${product.id}`} className="mt-2 text-pink-600 hover:scale-x-105 transition-all transform">View{">>"}</Link>
        </div>
      </div>
      ))
    }
    </div>
  </div>
</section>
  )
}
