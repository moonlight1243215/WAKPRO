import styles from "./index.module.css"

const OurTeam = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <div className={styles.orange}></div>
            <div className={styles.memberBox}>
                <div className={styles.memberPhoto}></div>
                <div className={styles.textBox}>
                    <p>Adam Kowalski</p>
                    <p>Co-founder, projektant</p>
                </div>
            </div>
            <div className={styles.memberBox}>
                <div className={styles.memberPhoto}></div>
                <div className={styles.textBox}>
                    <p>Adam Kowalski</p>
                    <p>Co-founder, projektant</p>
                </div>
            </div>
            <div className={styles.memberBox}>
                <div className={styles.memberPhoto}></div>
                <div className={styles.textBox}>
                    <p>Adam Kowalski</p>
                    <p>Co-founder, projektant</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default OurTeam;
