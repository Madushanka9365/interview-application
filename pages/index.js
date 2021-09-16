import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <>
        
        <div>
          
          
        
          <h1 className={styles.title}>Employee Database Management</h1>
          <p className={styles.text}>Tracking employee data and records has never been easier. A centralized HRIS, Zoho People ensures that employee data is perfectly synced across multiple key systems.(This Text Copied By internet)</p>
        
          <Link href="/views/allemployees">
            <a className={styles.btn}>GET STARTED</a>
          </Link>
          
          

        </div>

</>
  )
}
