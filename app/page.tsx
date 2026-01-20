import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Desktop Hero */}
      <div className="relative h-screen hidden md:block">
        <Image
          src="/hero-desktop.png"
          width={1536}
          height={1024}
          className="w-full h-full object-cover opacity-20"
          alt="hero desktop image"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Cinestream!
            </h1>
            <p className="text-xl mt-4">
              Your ultimate destination for movies and entertainment.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden py-12">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold">
            Welcome to Cinestream!
          </h1>
          <p className="text-lg mt-4">
            Your ultimate destination for movies and entertainment.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4 bg-black border-t">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-us" className="text-xl md:text-4xl font-bold text-center mb-12">
            Why Choose Cinestream?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-2xl border border-[#888]">
              <h3 className="text-xl font-semibold mb-5">
                Unlimited Movies
              </h3>
              <p>
                Access thousands of movies from all genres. New releases added
                weekly.
              </p>
            </div>
            <div className="p-12 rounded-2xl border border-[#888]">
              <h3 className="text-xl font-semibold mb-5">
                4K Quality
              </h3>
              <p>
                Experience cinema-quality streaming with crystal clear 4K
                resolution.
              </p>
            </div>

            <div className="p-12 rounded-2xl border border-[#888]">
              <h3 className="text-xl font-semibold mb-5">
                Watch Anywhere
              </h3>
              <p>
                Stream on any device - phone, tablet, laptop, or smart TV.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] py-8 border-t mt-0">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="font-bold text-white">Cinestream</span> &copy;{" "}
            {new Date().getFullYear()}
          </div>
          <div>
            <span className="block md:inline">Contact: </span>
            <a
              href="mailto:info@cinestream.com"
              className="underline text-white hover:no-underline"
            >
              info@cinestream.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
