import Image from "next/image"
import styles from '../../styles/Product.module.css'
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
    const food = {
        id: 1,
        img: "/images/food 6.png",
        name: 'FRY',
        price: [20.5, 23.0, 34.5],
        desc:"Lorem ipsum dot "
    }
  return (
      <div className={styles.container}>
          <div className={styles.left}>
              <div className={styles.imgContainer}>
                  <Image src={food.img}layout='fill'alt=""objectFit="contain" priority/>
              </div>
          </div>
          <div className={styles.right}>
              <h1 className={styles.title}>{food.name}</h1>
              <span className={styles.prize}>KSH{food.price[size]}</span>
              <p className={styles.desc}>{food.desc}</p>
              <h3 className={styles.choose}>Choose the size</h3>
              <div className={styles.sizes}>
                  <div className={styles.size} onClick={()=>setSize(0)}>
                      <Image src="/images/food 6.png" alt="" layout="fill" priority/>
                      <span className={styles.number}>small</span>
                  </div>
                  <div className={styles.size} onClick={() => setSize(1)}>
                      <Image src="/images/food 6.png" alt="" layout="fill" priority/>
                      <span className={styles.number}>Medium</span>
                  </div>
                  <div className={styles.size} onClick={() => setSize(2)}>
                      <Image src="/images/food 6.png" alt="" layout="fill" priority />
                      <span className={styles.number}>Large</span>
                  </div>

              </div>
              <h3 className={styles.choose}>CHOOSE ADDITIONAL INGREDIENTS</h3>
              <div className={styles.ingredients}>
                  <div className={styles.option}>
                      <input type="checkbox"
                          id="double"
                          className={styles.checkbox}
                      />
                      <label htmlFor="double">Double Ingredients</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox"
                          id="cubes"
                          name="cubes"
                          className={styles.checkbox}
                      />
                      <label htmlFor="cubes">Extra Royco Cubes</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox"
                          id="garlic"
                          name="garlic"
                          className={styles.checkbox}
                      />
                      <label htmlFor="garlic">Garlic</label>
                  </div>
                  <div className={styles.option}>
                      <input type="checkbox"
                          id="cheese"
                          name="cheese"
                          className={styles.checkbox}
                      />
                      <label htmlFor="cheese">Cheese</label>
                  </div>

              </div>
              <div className={styles.add}>
                  <input type='number' defaultValue={1} className={styles.quantity} />
                  <button className={styles.button}> Add To Cart</button>
              </div>
          </div>
      
    </div>
  )
}

export default Product;
