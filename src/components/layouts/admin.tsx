import React from 'react'
import { LayoutProps } from '../../models/layout'


type Props = {}

const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        <div className='grid grid-clos-[200px,auto]'>
            Slidebar
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default LayoutAdmin