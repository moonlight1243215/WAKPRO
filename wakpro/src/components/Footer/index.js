import styles from './index.module.css'

function Footer() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.info}>
            <div className={styles.infoBox}>
                <p>Adres</p>
                <p>WAKPRO</p>
                <p>42-400 Zawiercie</p>
                <p>Sienkiewicza 58B</p>
            </div>
            <div className={styles.infoBox}>
                <p>Kontakt</p>
                <div className={styles.mailBox}>
                    <p>E-mail:</p>
                    <div className={styles.right}>
                        <p>wp@wakpro.com</p>
                    </div>
                </div>
                <div className={styles.telBox}>
                    <p>Tel:</p>
                    <div className={styles.right}>
                        <p>501315007</p>
                    </div>
                </div>
            </div>
            <div className={styles.infoBox}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.7426136797826!2d19.437511415950617!3d50.48313519288985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47172333197f2063%3A0x7e2733ca005190d8!2s%22WAKPRO%22%20Projektowanie%2C%20Koordynacja%2C%20Nadzory!5e0!3m2!1spl!2spl!4v1678115892476!5m2!1spl!2spl"></iframe>
            </div>
        </div>
    </div>
</div>
);
}

export default Footer;