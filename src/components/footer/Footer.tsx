import Logo from "@/components/ui/Logo";
import Link from "next/link";

import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footLogo}>
                    <Logo/>
                </div>
                <div className={styles.infoWrap}>
                    <p className={styles.f_menu}>
                        <Link href="/">이메일무단수집거부</Link>
                        <Link href="/">개인정보취급방침</Link>
                    </p>
                    <div className={styles.info}>
                        <div>
                            <address>서울특별시 아무개구 아무개동 아무개 아파트</address>
                            <div>
                                <p>TEL : 02-0000-0000</p>
                                <p>
                                    EMAIL : test@gamil.com
                                </p>
                                <p>공동대표 : 홍길동, 김영희</p>
                            </div>
                        </div>
                        <div>
                            <p>(주)컴퍼니 타이틀</p>
                            <p>Copyright 2022 BY 타이틀 Co., Ltd. All right
                                reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer