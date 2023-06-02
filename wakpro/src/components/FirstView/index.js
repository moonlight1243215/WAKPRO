import styles from './index.module.css'
import { FaDraftingCompass, FaArrowDown } from "react-icons/fa";

function FirstView() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.sectionOne}></div>
        <div className={styles.sectionTwo}>
            <FaDraftingCompass className={styles.logo}/>
            <p className={styles.mainText}>WAKPRO</p>
            <div className={styles.titleBox}>
                <p className={styles.title}>PROJEKTOWANIE</p>
                <div className={styles.square}></div>
                <p className={styles.title}>NADZORY</p>
                <div className={styles.square}></div>
                <p className={styles.title}>KOORDYNACJA</p>
                <div className={styles.down}>
                    <FaArrowDown className={styles.arrow}/>
                </div>
            </div>
        </div>
        <div className={styles.sectionThree}></div>
        <div className={styles.sectionFour}></div>
    </div>
</div>
);
}

export default FirstView;