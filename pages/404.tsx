import React from 'react'
import EmptyLayout from '../components/layouts/empty'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <h1 className='text-center text-5xl font-bold ' >
      NotFound
    </h1>
  )
}
NotFound.Layout = EmptyLayout
export default NotFound