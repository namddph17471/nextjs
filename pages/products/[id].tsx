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
  const data: any = await(await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json()
  const paths = data.map((item:any) =>{
    return {params :{id:item.id}}
  })
  return {
    paths,
    fallback:"blocking"
  }
}
export const getStaticProps:GetStaticProps<getStaticProps>  = async (context : GetStaticPropsContext) =>{
  const data = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json()
  if(!data){
    return {
      notFound: true
    }
  }
  return {
    props:{
      product:data
    },

  }
}
export default ProductDetail