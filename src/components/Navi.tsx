import Link from 'next/link';

function Navi() {
  return (
    <nav className="flex gap-4">
      <Link href="/">회사소개</Link>
      <Link href="/">기술소개</Link>
      <Link href="/">제품인증</Link>
      <Link href="/">게시판</Link>
    </nav>
  );
}

export default Navi;
