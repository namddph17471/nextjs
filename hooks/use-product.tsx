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
    const reomve = async (id:any) =>{
        await removeItem(id)
        const newProduct = data.filter((item:any) => item.id !== id )
        mutate([...data,newProduct])
    }
  return {
    data,
    error,
    reomve,
    create
  }
}

export default useProducts