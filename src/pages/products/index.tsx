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
          <Link href={`/products/${product.id}`} className="text-red-500">
            {product.name}
            <button>edit</button>
          </Link>
        </div>
      ) )}
    </div>
  )
}
export default ProductPage