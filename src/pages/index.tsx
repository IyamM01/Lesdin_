// pages/index.tsx
import { NextPage } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

const Home: NextPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/image/bg-sekolah.png"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Floating Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white max-w-6xl pl-8 md:pl-50">
          <div className="flex items-center gap-4 mb-6">
            <button className="bg-green-700 hover:bg-green-800 text-sm font-semibold px-6 py-2 rounded-full shadow-md transition">
              Info PKL
            </button>
            <a
              href="#"
              className="text-sm inline-flex items-center hover:underline"
            >
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <h1 className="text-2l md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            SMK NEGERI 2 DEPOK
          </h1>
          <p className="text-lg font-light mt-2 drop-shadow">
            Unggul, Berkarakter, Kompeten
          </p>
        </div>
      </section>
      {/* Running Logo Section */}
      <section className="bg-white py-8 overflow-hidden">
        <div className="flex gap-10 animate-scroll whitespace-nowrap">
          {["/image/citra.png", "/image/gama.png", "/image/carglos.png"].map(
            (src, i) => (
              <Image
                key={i}
                src={src}
                alt="Logo Mitra"
                width={120}
                height={40}
              />
            )
          )}
        </div>
      </section>
      {/* Tentang Sekolah */}

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image/bg-sekolah-2.png" // Ganti dengan path gambar Anda
            alt="Background Tentang Sekolah"
            fill
            className="object-cover object-center"
            quality={80}
          />
          <div className="absolute inset-0 bg-black/30" />{" "}
          {/* Overlay untuk meningkatkan keterbacaan teks */}
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Judul dan Lokasi */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl font-bold">SMK Negeri 2 Depok</h2>
            <p className="text-xl text-gray-200 mt-2">Sleman</p>
          </div>

          {/* Deskripsi */}
          <div className="mb-16 text-white/90">
            <p className="text-justify leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Visi Misi */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
              Visi dan Misi
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Visi */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-blue-800 mb-3">Visi</h4>
                <p className="text-gray-700">Membangun Masa Depan</p>
              </div>

              {/* Misi */}
              <div className="mb-6">
                <h4 className="text-xl font-medium text-blue-800 mb-3">Misi</h4>
                <p className="text-gray-700 mb-4">
                  Menghasilkan peserta didik yang unggul, berkarakter, kompeten,
                  dan berwawasan lingkungan.
                </p>
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors mt-4">
                Misi
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
