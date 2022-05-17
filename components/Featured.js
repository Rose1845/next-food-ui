import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';
const Featured = () => {
      const [index, setIndex] = useState(0);
    const image = [
        "/images/food 1.png",
        "/images/food 4.png",
        "/images/food 6.png"
    ];
    const handleArrow = (direction) => {
        if (direction === "LEFT") {
            setIndex(index !==0 ? index-1 : 2)
        }
        if (direction === "RIGHT") {
            setIndex(index !==2 ? index + 1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}}onClick={()=>handleArrow("LEFT")}>
                <Image src="/images/left-arrow.png" alt="" layout='fill' objectFit='contain' />
            </div>
            
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {image.map((imag, i) => ( 
                    <div className={styles.imgContainer} key={i}>
                        <Image src={imag} alt=""layout='fill' objectFit='contain'/> 
                    </div>
                    ))}

               
                   

            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("RIGHT")}>
                <Image src="/images/next.png" alt="" layout='fill' objectFit='contain' />
            </div>

        </div>
    )
        
    
}
export default Featured;