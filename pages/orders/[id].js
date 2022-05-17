import styles from '../../styles/Order.module.css';
import Image from 'next/image';

const Order = () => {
    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status < 1) return styles.undone;
        
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>ORDER ID</th>
                            <th>CUSTOMER</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>123456</span>
                            </td>
                            <td>
                                <span className={styles.name}>Rose Atieno</span>
                            </td>
                            <td>
                                <span className={styles.address}>Kondele,233</span>
                            </td>
                            <td>
                                <span className={styles.total}>KSHS 500</span>
                            </td>


                        </tr>
                    </table>

                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/images/food 1.png" alt="" width={30} height={30} />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image className={ styles.checkedIcon} src="/images/food 6.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/images/food 1.png" alt="" width={30} height={30} />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/images/food 2.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/images/food 1.png" alt="" width={30} height={30} />
                        <span>On Way</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/images/food 11.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/images/food 1.png" alt="" width={30} height={30} />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/images/food 9.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>
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
                    <button className={styles.button}>PAID</button>
                </div>
            </div>

        </div>
    )
}

export default Order
