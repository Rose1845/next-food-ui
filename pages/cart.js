import Image from "next/image"
import styles from '../styles/Cart.module.css';

const Cart = () => {
  return (
      <div className={styles.container}>
          <div className={styles.left}>
              <table className={styles.table}>
                  <tr className={styles.trTitle} >
                      <th>Products</th>
                      <th>Name</th>
                      <th>Extras</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                  </tr>
                  <tr className={styles.tr}>
                      <td>
                          <div className={styles.imgContainer}>
                              <Image src="/images/food 11.png"
                                  layout="fill"
                                  objectFit="cover"
                                  alt="" />

                          </div>
                      </td>
                      <td>
                          <span className={styles.name}>FRY</span>
                      </td>
                      <td>
                          <span className={styles.extras}>Double ingredients,Royco cubes ,garlic</span>
                      </td>
                      <td>
                          <span className={styles.prize}>KSHS 200</span>
                      </td>
                      <td>
                          <span className={styles.quantity}>2</span>
                      </td>
                      <td>
                          <span className={styles.total}>KSHS 500</span>
                      </td>


                  </tr>
              </table>
              <table className={styles.table}>
                  <tr className={styles.trTitle}>
                      <th>Products</th>
                      <th>Name</th>
                      <th>Extras</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                  </tr>
                  <tr className={styles.tr}>
                      <td>
                          <div className={styles.imgContainer}>
                              <Image src="/images/food 11.png"
                                  layout="fill"
                                  objectFit="cover"
                                  alt="" />

                          </div>
                      </td>
                      <td>
                          <span className={styles.name}>FRY</span>
                      </td>
                      <td>
                          <span className={styles.extras}>Double ingredients,Royco cubes ,garlic</span>
                      </td>
                      <td>
                          <span className={styles.prize}>KSHS 200</span>
                      </td>
                      <td>
                          <span className={styles.quantity}>2</span>
                      </td>
                      <td>
                          <span className={styles.total}>KSHS 500</span>
                      </td>


                  </tr>
              </table>
          </div>
          <div className={styles.right}>
              <div className={styles.wrapper}>
                  <h2 className={styles.title}>CART TOTAL</h2>
                  <div className="totalText">
                      <b className={styles.totalTextTitle}>Subtotal:</b>KSHS 569.00

                  </div>
                  <div className="totalText">
                      <b className={styles.totalTextTitle}>Discount:</b>KSHS 00.00

                  </div>
                  <div className="totalText">
                      <b className={styles.totalTextTitle}>Total:</b>KSHS 569.00

                  </div>
                  <button className={styles.button}>CHECKOUT NOW</button>
              </div>

          </div>
      
     </div>
  )
}

export default Cart
