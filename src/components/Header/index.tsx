import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.menu}>
            <li><Link href="/"><a className={style.li}> Home </a></Link></li>
            <li><Link href="/about"><a className={style.li}> About </a></Link></li>
            <li><Link href="/products"><a className={style.li}> Product </a></Link></li>
            <li><Link href="/contact"><a className={style.li}> Contact </a></Link></li>
        </ul>
    </div>
  )
}

export default Header