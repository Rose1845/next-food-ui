import styles from '../styles/Navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
              <div className={styles.call}>
                  <Image src="/images/phone-call.png"height={32}width={32} />
              </div>
              <div className={styles.texts}>
                <div className={styles.text}>ORDER NOW</div>
                <div className={styles.text}>254757764865</div>
              </div>
          </div>
          <div className={styles.item}>
              <ul className={styles.list}>
                <li className={styles.listItem}>Homepage</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <h1 classname={styles.logoh1}>FLAVOUR</h1>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Contact</li>
              </ul>
          </div>
          <div className={styles.item}>
           <div className={styles.cart}>
           <Image src='/images/shopping-cart.png' width={30} height={30} />
           <div className={styles.count}>2</div>
           </div>
          </div>
      
    </div>
  )
}

export default Navbar
