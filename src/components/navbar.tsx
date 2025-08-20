import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-8 py-3 flex justify-between items-center w-[92%] md:w-[75%] z-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/image/logo-sekolah.png"
          alt="Logo Sekolah"
          width={52}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="items-center hidden md:flex space-x-8 text-sm font-medium text-[#3C5148]">
        {["Beranda", "Mitra", "Kontak", "Profile"].map((menu) => (
          <a
            key={menu}
            href="#"
            className="hover:text-[#678E4D] transition-colors"
          >
            {menu}
          </a>
        ))}
        <Link href="/auth/login">
          <button className="px-5 py-2 bg-[#3C5148] text-white rounded-full hover:bg-[#678E4D] transition-colors">
            Login
          </button>
        </Link>
      </nav>
    </div>
  );
}
