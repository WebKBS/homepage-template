import Navi from '../navigator/Navi';
import styles from './Header.module.css';
import Logo from "@/components/ui/Logo";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1>
                    <Logo/>
                </h1>
                <Navi/>
            </div>
        </header>
    );
}

export default Header;
