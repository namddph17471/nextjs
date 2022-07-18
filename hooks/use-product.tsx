import React from 'react'
import useSWR from 'swr'
import { add, removeItem } from '../api/products'


const useProducts = ()=> {
    const {data,error,mutate} = useSWR("/products")
    // create
    const create = async (item:any) =>{
        const product = await add(item)
        mutate([...data,product])
    }
    const remove = async (id:any) =>{
        await removeItem(id)
        const newProduct = data.filter((item:any) => item.id !== id )
        mutate(newProduct)
    }
  return {
    data,
    error,
    remove,
    create
  }
}

export default useProducts