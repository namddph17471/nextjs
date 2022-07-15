import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layouts'
import { useAuth } from '../hooks/auth'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { data, error, register } = useAuth();
  if(error) return <div>fail to load</div>;
  if(!data) return <div>Loading...</div>
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map((user:any,index:any) => <div key={index}>{user.email}</div>)}
      <button onClick={()=> register()}  className="p-2">Đăng ký</button>
      <main className={styles.main}>
        Main
      </main>
    </div>
  )
}
export default Home
