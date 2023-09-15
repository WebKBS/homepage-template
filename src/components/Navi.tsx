import Link from 'next/link';

function Navi() {
  return (
    <nav className="flex">
      <Link href="/" className="py-5 px-2.5 font-medium w-20">회사소개</Link>
      <Link href="/" className="py-5 px-2.5 font-medium w-20">기술소개</Link>
      <Link href="/" className="py-5 px-2.5 font-medium w-20">제품인증</Link>
      <Link href="/" className="py-5 px-2.5 font-medium w-20">게시판</Link>
    </nav>
  );
}

export default Navi;
