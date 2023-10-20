import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="cursor-pointer text-2xl font-bold">EZSpace</span>
          </Link>
          <Link href="/login">
            <span className="cursor-pointer">로그인</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
