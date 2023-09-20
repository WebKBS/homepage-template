import NaviItem from './NaviItem';
import styles from './SideMenu.module.css';
import {useContext} from 'react';
import {MenuContext} from '@/context/MenuContext';

function SideMenu() {
    const {toggle} = useContext(MenuContext);

    return (
        <aside className={styles.sideMenu}>
            <ul className={styles.menuList}>
                <NaviItem onClick={toggle}/>
            </ul>
        </aside>
    );
}

export default SideMenu;

