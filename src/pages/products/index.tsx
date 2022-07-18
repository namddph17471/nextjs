import useProducts from '@/hooks/use-product'
import Link from 'next/link'
import React from 'react'



const ProductPage = () => {
  const {data, error} = useProducts()
  if(error) return <div>Fail</div>
  if(!data) return <div>Loading ...</div>
  return (
    <div>
      {data.map((product:any,index:any) => (
        <div key={index}>
          <Link href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ) )}
    </div>
  )
}
export default ProductPage