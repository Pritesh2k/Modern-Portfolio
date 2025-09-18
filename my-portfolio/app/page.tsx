import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome, FaPen, FaUser } from "react-icons/fa";
import {RecentProjects} from "@/Components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black-100 text-white overflow-x-hidden">
      {/* Floating navigation at the top */}
      <FloatingNav navItems={navItems}
      />
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-5 sm:px-10 mt-10">
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
