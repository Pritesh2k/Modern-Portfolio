import Hero from "@/Components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-white text-4xl">
          <Hero />
        </h1>
      </div>
    </main>
  );
}