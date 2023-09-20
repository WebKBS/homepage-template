import styles from './Navi.module.css';
import SideMenuButton from '@/components/ui/Side-menu-button';
import NaviItem from './NaviItem';

function Navi() {
  return (
    <>
      <SideMenuButton />
      <nav className={styles.gnb}>
        <ul className={styles.list}>
          <NaviItem />
        </ul>
      </nav>
    </>
  );
}

export default Navi;
