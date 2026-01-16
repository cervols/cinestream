import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-1 grid-cols-1 h-screen">
      <Image
        src="/hero-desktop.png"
        width={1536}
        height={1024}
        className="hidden md:block col-start-1 row-start-1 w-full h-full object-cover"
        alt="hero desktop image"
        priority
      />
      <Image
        src="/hero-mobile.png"
        width={1024}
        height={1536}
        className="block md:hidden col-start-1 row-start-1 w-full h-full object-cover"
        alt="hero mobile image"
        priority
      />

      <header className="col-start-1 row-start-1 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white">
            Welcome to Cienstream!
          </h1>
        </div>
      </header>
      <main className="col-start-1 row-start-1 flex flex-col items-center justify-center">
      </main>
    </div>
  );
}
