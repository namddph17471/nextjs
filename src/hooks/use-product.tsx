import { add, detailItem, removeItem } from '@/api/products'
import React from 'react'
import useSWR from 'swr'


const useProducts = ()=> {
    const {data,error,mutate} = useSWR("/products")
    // create
    const create = async  (item:any) =>{
        const product = await add (item)
        mutate([...data,product])
    }
    // remove
    const remove = async (id:any) =>{
        await removeItem(id)
        const newProduct = data.filter((item:any) => item.id !== id )
        mutate(newProduct)
    }
    //detail
    const detail = async (id:any)=>{
      const product = await detailItem(id)
    }
  return {
    data,
    error,
    remove,
    create
  }
}

export default useProducts