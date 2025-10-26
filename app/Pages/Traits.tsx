"use client";
import { useState } from "react";
import ScrollVelocity from "../Components/ScrollVelocity";
import ScrollStack, { ScrollStackItem } from "../Components/ScrollStack";

const skills = [
  { name: "Web Design", description: "2+ years learning web design. 1 commercial project and many personal projects" },
  { name: "UX and UI", description: "Good looking design & UI, communicating feeling & interactivity. Insiration: Nature, Science, Philosophy, Art & Other Media" },
  { name: "Next.js", description: "Farmiliar with Next.JS framework to create intricate applications" },
  { name: "Cybersecurity", description: "Over 1 year experience, protecting and ensuring cybersecurity solutions remained compliant above 95%." },
];

export const Traits = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center 
                    bg-black/5 backdrop-blur-xl border border-white/10 overflow-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div className="flex w-full h-[15vh] items-center justify-center">
        <div className="text-5xl font-semibold uppercase text-white text-center md:text-left font-[Roboto_Flex]">
          <ScrollVelocity
            texts={["Skills / Skills / Skills / Skills / Skills / Skills / Skills / "]}
            velocity={150}
            className="custom-scroll-text"
          />
        </div>
      </div>

      {/* Skills Cards */}
      <div className="flex justify-center items-center w-full h-[85vh] text-center">
        <ScrollStack>
          {skills.map((skill, idx) => (
            <ScrollStackItem key={skill.name}>
              <div
                className="flex flex-col items-center justify-center h-full px-6"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <h2 className="text-white drop-shadow-[0_0_20px_var(--color-white)] text-4xl leading-none mb-4">{skill.name}</h2>
                <p className="text-white/70 text-xl">{skill.description}</p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};
