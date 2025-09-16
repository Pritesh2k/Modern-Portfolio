import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome, FaPen, FaUser } from "react-icons/fa";

export default function Home() {
  return (
<main className="relative flex justify-center items-center flex-col overflow-hidden w-screen h-screen max-w-full max-h-screen bg-black px-5 sm:px-10">
  <div className="w-full max-w-7xl h-full max-h-screen flex flex-col justify-center items-center">
    <h1 className="text-white text-4xl">
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "Projects", link: "/projects", icon: <FaPen /> },
          { name: "Contact", link: "/contact", icon: <FaUser /> }
        ]}
      />
      <Hero />
      <Grid />
    </h1>
  </div>
</main>

  );
}