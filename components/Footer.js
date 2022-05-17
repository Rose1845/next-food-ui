import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/food 10.png" alt="" width={100} height={100} layout='fill' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            DELICIOUS FOODS IN  YOUR STORE</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND US</h1>
          <p className={styles.text}>
            105 ,Kisumu-Mamboleo Road,
            <br />KISUMU 40100
            <br/>2457764865
          </p>
          <p className={styles.text}>
            105 ,Kisumu-Mamboleo Road,
            <br />KISUMU 40100
            <br/>2457764865
          </p>
          <p className={styles.text}>
            105 ,Kisumu-Mamboleo Road,
            <br />KISUMU 40100
            <br/>2457764865
          </p>
          <p className={styles.text}>
            105 ,Kisumu-Mamboleo Road,
            <br />KISUMU 40100
            <br/>2457764865
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY-FRIDAY
            <br />05:00 - 24:00
          </p>
        </div>
      </div>
      {/* <div className={styles.footer}>
        <h1>Created by{' '}</h1>
        <span className={styles.logo}>
          <Image src="/images/logo.png" alt="" width={100} height={100} />
        </span>
      </div> */}
    </div>

  )
}
export default Footer
