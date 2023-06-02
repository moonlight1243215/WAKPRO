import styles from './index.module.css'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

function Slider() {


return (
<div className={styles.container}>
<Swiper
    spaceBetween={15}
    slidesPerView={
        window.innerWidth < 600
        ? 1
        : window.innerWidth < 1000
        ? 1.15
        : 1.3
    }
    autoplay={{ 
      delay: 3600,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className={styles.swiperContainer}
  >
    <SwiperSlide>
        <div className={styles.slide}>
            <div className={styles.containerOne}>
                <div className={styles.info}>
                    <p>Magna nostrud dolor</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={styles.slide}>
            <div className={styles.containerTwo}>
                <div className={styles.info}>
                    <p>Magna nostrud dolor</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={styles.slide}>
            <div className={styles.containerThree}>
                <div className={styles.info}>
                    <p>Magna nostrud dolor</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={styles.slide}>
            <div className={styles.containerFour}>
                <div className={styles.info}>
                    <p>Magna nostrud dolor</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={styles.slide}>
            <div className={styles.containerFive}>
                <div className={styles.info}>
                    <p>Magna nostrud dolor</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
</Swiper>
</div>
);
}

export default Slider;