// Home.tsx
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { RecentProjects } from "@/Components/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black-100 text-white overflow-x-hidden">
      {/* Floating navigation at the top */}
      <FloatingNav navItems={navItems} />

      {/* Hero fixed in background */}
      <Hero />

      {/* Spacer to push content below the hero initially */}
      <div className="h-screen w-full" />

      {/* Scrollable content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center items-center px-5 sm:px-10">
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
