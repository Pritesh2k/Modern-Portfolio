import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="relative w-screen rounded-tl-[50px] rounded-tr-[50px] p-[1px] overflow-hidden">
      {/* Spinning gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner content with solid background */}
      <div className="relative z-10 -translate-y-20 mt-5 rounded-tl-[50px] rounded-tr-[50px] bg-white backdrop-blur-3xl">
        <h1 className="flex justify-center items-center text-center text-[40px] md:text-5xl lg:text-6xl mt-20 h-40 text-slate-900">
          Personal
          <span className="text-red-500 font-bold ml-3">Traits</span>
        </h1>


        <BentoGrid className="h-screen w-80% py-5">
          {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
