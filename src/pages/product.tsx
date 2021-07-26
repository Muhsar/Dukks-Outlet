import React from 'react'
import SingleProduct from '../components/Product/index';
import { useParams } from 'react-router-dom';

export default function Product(props) {
  const params: {productId:any, category:any} = useParams()
  const {productId, category} = params
  console.log(productId, category)
  return (
    <>
      <SingleProduct productId={productId} category={category} />
    </>
  )
}
