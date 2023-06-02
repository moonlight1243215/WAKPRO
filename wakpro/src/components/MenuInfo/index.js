import { useState } from 'react';
import styles from './index.module.css'
import { AiFillHome } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';


function MenuInfo() {
const [show, setShow] = useState(false);

const click = () => {
    setShow(true)
}

const clickH = () => {
    setShow(false)
}

return (
<div className={styles.container}>
    <div className={styles.box}>
        <div className={styles.logo}></div>
        <div className={styles.menuBox}>
            <Link to="/"><AiFillHome className={styles.home} /></Link>
            <div className={styles.square}></div>
            <Link className={styles.link} to="/about">O FIRMIE</Link>
            <div className={styles.square}></div>
            <Link to="/about" className={styles.link}>KARIERA</Link>
            <div className={styles.square}></div>
            <Link to="/about" className={styles.link}>KONTAKT</Link>
        </div>
        <div className={styles.hamburger}>
            <BsList onClick={click}/>
        </div>
    </div>
    {show ? 
    <div className={styles.hamburgerBox}>
        <div className={styles.insideBox}>
            <Link to="/"><AiFillHome className={styles.homeH} onClick={clickH}/></Link>
            <div className={styles.squareH}></div>
            <Link className={styles.linkH} to="/about" onClick={clickH}>O FIRMIE</Link>
            <div className={styles.squareH}></div>
            <Link to="/about" className={styles.linkH} onClick={clickH}>KARIERA</Link>
            <div className={styles.squareH}></div>
            <Link to="/about" className={styles.linkH} onClick={clickH}>KONTAKT</Link>
        </div>    
    </div> 
    : 
    null} 
</div>
);
}

export default MenuInfo;