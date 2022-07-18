import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'


const EmptyLayout = ({children}: LayoutProps) => {
  return (
    <div className=''>
        {children}
    </div>
  )
}

export default EmptyLayout