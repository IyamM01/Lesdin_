// pages/index.tsx
import { NextPage } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, GraduationCap } from "lucide-react";

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
            <button className="bg-[#3C5148] hover:bg-[#678E4D] text-sm font-semibold px-6 py-2 rounded-full shadow-md transition">
              <a href="#" className="text-sm inline-flex items-center">
                Info PKL Baca Selengkapnya
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
            </button>
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
      <section className="bg-white py-6 relative overflow-hidden">
        <div className="flex w-max animate-infinite-scroll">
          {[
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
            "/image/citra.png",
            "/image/carglos.png",
            "/image/gama.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Logo Mitra"
              width={80}
              height={40}
              className="mx-8 inline-block"
            />
          ))}
        </div>
      </section>
      {/* Tentang Sekolah + Visi Misi */}
      <section className="w-full relative">
        {/* Gambar background */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/image/bg-sekolah-2.png"
            alt="Foto Sekolah"
            fill
            className="object-cover object-center"
          />
          {/* Card biru di atas gambar */}
          <div className="absolute top-8 right-8 md:right-24 bg-[#3C5148] bg-opacity-95 rounded-xl shadow-lg p-6 max-w-md text-white">
            <h3 className="text-lg md:text-2xl font-bold mb-2">
              SMK Negeri 2 Depok Sleman
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        {/* Card putih di bawah gambar */}
        <div className="container mx-auto px-4 md:px-0 -mt-16 relative z-10 flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 text-center max-w-xl w-full">
            <p className="text-green-600 font-medium mb-2 flex items-center justify-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Visi dan Misi
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#678E4D] mb-6">
              Visi Membangun Masa Depan
            </h3>
            <p className="text-gray-700 text-lg md:text-xl mb-8">
              Menghasilkan peserta didik yang unggul, berkarakter, kompeten, dan
              berwawasan lingkungan.
            </p>
            <a
              href="#misi"
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-green-700"
            >
              Misi <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Info PKL */}
      <section className="py-20 px-6 bg-white">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          {/* Background hijau di belakang gambar */}
          <div className="relative md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <div className="absolute left-0 top-6 w-[90%] h-[90%] bg-[#B7CDB0] rounded-lg -z-10" />
            <Image
              src="/image/bg-sekolah-3.png"
              alt="Kegiatan PKL"
              width={370}
              height={220}
              className="rounded-lg shadow-lg relative z-10"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Card Putih */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:ml-8 mt-8 md:mt-0 md:w-1/2 w-full">
            <p className="text-green-600 text-sm font-medium flex items-center gap-2 mb-2">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Info Praktik Kerja Lapangan
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#678E4D]">
              Pengalaman Nyata untuk Masa Depan Karier
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </section>
      {/* Statistik Mitra */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-600 text-sm font-medium flex items-center gap-2 justify-center mb-4">
            <GraduationCap />
            Jumlah Mitra Industri
          </p>
          <div className="bg-[#3C5148] rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center px-4 py-8 gap-6">
            <div className="flex-1 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">100 +</h3>
              <p className="text-base font-medium opacity-80">Jumlah Mitra</p>
            </div>
            <div className="flex-1 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">80 +</h3>
              <p className="text-base font-medium opacity-80">Dalam Provinsi</p>
            </div>
            <div className="flex-1 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">20 +</h3>
              <p className="text-base font-medium opacity-80">Luar Provinsi</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#3C5148] hover:bg-[#678E4D] text-white font-semibold py-3 px-8 rounded-lg shadow transition flex items-center gap-2 text-lg">
              Mitra PKL
              <ArrowRight className="inline-block h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Home;
