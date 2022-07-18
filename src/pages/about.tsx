import React from 'react'
import LayoutAdmin from '../components/layouts/admin'
import styles from '../styles/Home.module.css'

type Props = {}

const About = (props: Props) => {
  return (
    <div className={styles.main}>About</div>
  )
}
About.Layout = LayoutAdmin
export default About