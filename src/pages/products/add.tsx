/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useForm} from 'react-hook-form'
type Props = {}

const addProduct = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
  return (
    <div>

    </div>
  )
}

export default addProduct