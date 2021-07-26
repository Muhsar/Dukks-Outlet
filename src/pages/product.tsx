import React from 'react'
import SingleProduct from '../components/Product/index';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function Product(props) {
  const params: {productId:any, category:any} = useParams()
  const {productId, category} = params
  console.log(productId, category)
  return (
    <>
    <Header />
      <SingleProduct productId={productId} category={category} />
    </>
  )
}
