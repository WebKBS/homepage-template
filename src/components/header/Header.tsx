import Link from 'next/link';
import Image from 'next/image';
import Navi from '../navigator/Navi';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1>
                    <Link href="/" className={styles.h1}>
                        <Image src="/logo.svg" alt="logo" width={40} height={40}/>
                        <span>HOME PAGE</span>
                    </Link>
                </h1>
                <Navi/>
            </div>
        </header>
    );
}

export default Header;
