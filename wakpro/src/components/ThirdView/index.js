import Slider from '../Slider/index';
import styles from './index.module.css'

function ThirdView() {

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.left}>
            <p className={styles.title}>REALIZACJE</p>
            <p>Enim anim aliquip esse sunt esse enim qui esse elit quis cillum. Dolor est aliqua nisi ipsum et eiusmod sit sit Lorem sint sit sint. Ex id veniam cillum nostrud cupidatat duis. Amet anim est aliquip irure dolor proident. Esse aliquip tempor dolor veniam amet aliquip officia fugiat proident duis mollit pariatur esse Lorem. Adipisicing sit sunt eu sunt tempor occaecat sunt officia irure qui minim.</p>
        </div>
        <div className={styles.right}>
            <Slider />
        </div>
    </div>
</div>
);
}

export default ThirdView;