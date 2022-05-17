import styles from '../styles/FoodList.module.css';
import FoodCard from './FoodCard';

 const FoodList = () => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>THE BEST FOODS IN TOWN</h1>
          <p className={styles.description}>lorem ipsum </p>
          <div className={styles.wrapper}>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard />
              <FoodCard/>
              
              
          </div>
          
      </div>
  )
}
export default FoodList;
