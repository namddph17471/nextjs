import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='flex bg-white-500 shadow p-4 rounded'>
            <li><Link href="/"><a className='block m-3'> Home </a></Link></li>
            <li><Link href="/about"><a className='block m-3'> About </a></Link></li>
            <li><Link href="/products"><a className='block m-3'> Product </a></Link></li>
            <li><Link href="/contact"><a className='block m-3'> Contact </a></Link></li>
        </ul>
    </div>
  )
}

export default Header