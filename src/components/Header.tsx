import Link from 'next/link';
import Image from 'next/image';
import Navi from './Navi';

function Header() {
  return (
    <header>
      <div className="py-4 px-5 flex justify-between items-center max-w-5xl m-auto">
        <h1>
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <span className="text-2xl font-bold">HOME PAGE</span>
          </Link>
        </h1>
        <Navi />
      </div>
    </header>
  );
}

export default Header;
