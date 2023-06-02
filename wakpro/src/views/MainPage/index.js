import Counter from '../../components/Counter';
import FirstView from '../../components/FirstView';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import OurTeam from '../../components/OurTeam';
import SecondView from '../../components/SecondView';
import ThirdView from '../../components/ThirdView';
import styles from './index.module.css';

function MainPage() {

  return (
    <div>
      <Menu />
      <FirstView />
      <div className={styles.gap}></div>
      <SecondView />
      <div className={styles.gap}></div>
      <Counter />
      <div className={styles.gap}></div>
      <ThirdView />
      <div className={styles.gap}></div>
      <OurTeam />
      <div className={styles.gap}></div>
      <Footer />
    </div>
  );
}

export default MainPage;