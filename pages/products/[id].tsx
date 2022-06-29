import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type getStaticProps = {
  product:any
}

const ProductDetail = ({product}: getStaticProps) => {
  return (
    <div>ProductDetail:{product.name}</div>
  )
}
export const getStaticPaths:GetStaticPaths = async ()=>{
  const data: any = await(await fetch(`http://localhost:3001/products`)).json()
  const paths = data.map((item:any) =>{
    return {params :{id:item.id}}
  })
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps:GetStaticProps<getStaticProps>  = async (context : GetStaticPropsContext) =>{
  const data = await(await fetch(`http://localhost:3001/products/${context.params.id}`)).json()
  return {
    props:{
      product:data
    }
  }
}
export default ProductDetail