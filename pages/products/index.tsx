import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type getStaticProps = {
  products:any[]
}

const ProductPage = ({products}: getStaticProps) => {
  if (!products) return null
  return (
    <div>
      {products.map(item =>(
        <div key={item.id} ><Link href={`/products/${item.id}`} >{item.name}</Link></div>
      ))}
    </div>
  )
}
export const getStaticProps:GetStaticProps<getStaticProps>  = async (context : GetStaticPropsContext) =>{
  const data = await(await fetch(`http://localhost:3001/products`)).json()
  if (!data) {
    return {
      notFound:true
    }
  }
  return {
    props:{
      products:data
    }
  }
}
export default ProductPage