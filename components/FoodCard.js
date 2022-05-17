import React from 'react';
import styles from '../styles/FoodCard.module.css'
import Image from 'next/image';

const FoodCard = () => {
  return (
    <div className={styles.container}>
          <Image src="/images/food 8.png" width={500} height={500}/>
          <h1 className={styles.title}>COCKTAIL</h1>
          <span className={styles.price}>300KSH</span>
          <p className={styles.desc}>
            lorem ipsum
          </p>
    </div>

  )
}

export default FoodCard
