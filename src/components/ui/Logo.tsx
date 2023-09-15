import Link from "next/link";
import Image from "next/image";
import styles from './Logo.module.css';


function Logo() {
    return (
        <Link href="/" className={styles.h1}>
            <Image src="/logo.svg" alt="logo" width={40} height={40}/>
            <span className={styles.logoTitle}>HOME PAGE</span>
        </Link>
    )
}

export default Logo;