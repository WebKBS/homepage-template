import {menuItems} from '@/data/navigation';
import Link from 'next/link';


function NaviItem({onClick}: { onClick?: () => void }) {
    return (
        <>
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <div>
                        <button type="button">{menuItem.title}</button>
                    </div>
                    <ul>
                        <li>
                            {menuItem.links.map((link, linkIndex) => (
                                <Link key={linkIndex} href={link.href} onClick={onClick}>
                                    {link.text}
                                </Link>
                            ))}
                        </li>
                    </ul>
                </li>
            ))}
        </>
    );
}

export default NaviItem;
