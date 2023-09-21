import Image from "next/image";
import styles from "./TopBanner.module.css";

interface TopBannerProps {
    subtitle: string;
    title: string;
    src: string;
}

function TopBanner({subtitle, title, src}: TopBannerProps) {
    return (
        <div className={styles.banner}>
            <Image src={`/${src}`} alt={title} fill style={{objectFit: "cover"}}/>
            <div className={styles.box}>
                <p className={styles.subTitle}>{subtitle}</p>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    )
}

export default TopBanner