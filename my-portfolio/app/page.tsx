import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { RecentProjects } from "@/Components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black-100 text-white overflow-x-hidden">
      {/* Floating nav */}
      <FloatingNav navItems={navItems} />

      {/* Hero */}
      <Hero />

      {/* Scrollable content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-5 sm:px-10">
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
