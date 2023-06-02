import styles from './index.module.css'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'

function MenuLanguage() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.emailBox}>
            <BsEnvelopeFill className={styles.icon}/>
            <p>wp@wakpro.com</p>
        </div>
        <div className={styles.phoneBox}>
            <BsFillTelephoneFill className={styles.icon}/>
            <p>501-315-007</p>
        </div>
    </div>
</div>
);
}

export default MenuLanguage;