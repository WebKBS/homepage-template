import Link from 'next/link';
import styles from "./Navi.module.css"
import SideMenuButton from "@/components/ui/Side-menu-button";

function Navi() {
    return (
        <>
            <SideMenuButton/>
            <nav className={styles.gnb}>
                <Link href="/">회사소개</Link>
                <Link href="/">기술소개</Link>
                <Link href="/">제품인증</Link>
                <Link href="/">게시판</Link>
            </nav>
        </>
    );
}

export default Navi;
