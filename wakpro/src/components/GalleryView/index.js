import styles from "./index.module.css"
import photo from '../../assets/logoCzarneAnetka.png'
import { Data } from '../../assets/data'

const FourthView = (props) => {
  
  return (
    <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.con}>
            <div className={styles.titleBox}>
              <img src={photo} className={styles.logo}/>
            </div>
            <div className={styles.productContainer}>
              {Data.map((e)=>{
                return (
                  <div className={styles.productBox}>
                    <img src={e.photo} className={styles.productImage} />
                    <div className={styles.productTitle}>
                      <p className={styles.name}>{e.title}</p>
                      <p className={styles.price}>Cena: {e.price}zł</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  )
};

export default FourthView;
