import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absoulute top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-8 py-3 flex justify-between items-center w-[92%] md:w-[75%] z-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/image/logo-sekolah.png"
          alt="Logo Sekolah"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
        {["Beranda", "Mitra", "Kontak", "Profile"].map((menu) => (
          <a
            key={menu}
            href="#"
            className="hover:text-green-700 transition-colors"
          >
            {menu}
          </a>
        ))}
      </nav>
    </div>
  );
}
