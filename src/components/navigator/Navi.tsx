import styles from './Navi.module.css';
import SideMenuButton from '@/components/ui/Side-menu-button';
import {menuItems} from "@/data/navigation";
import Link from "next/link";

function Navi() {
    return (
        <>
            <SideMenuButton/>
            <nav className={styles.gnb}>
                <ul className={styles.list}>
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <div>
                                <button type="button" className={styles.link}>
                                    {menuItem.title}
                                </button>
                            </div>
                            <ul className={styles.subList}>
                                {menuItem.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navi;
