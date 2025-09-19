import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section
      id="about"
className="relative w-screen overflow-hidden min-h-screen 
  bg-gradient-to-br from-white/10 via-white/5 to-transparent
  backdrop-blur-xl 
  border border-white/20 
  shadow-lg 
  rounded-tl-[50px] rounded-tr-[50px] 
  flex flex-col items-center"


      style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
    >
      {/* Title Section */}
      <h1 className="flex justify-center items-center text-center 
        text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl 
        text-slate-100 font-bold drop-shadow-lg 
        pt-12 sm:pt-14 md:pt-16 lg:pt-20">
        Personal
        <span className="text-blue-800 font-bold ml-3">Traits</span>
      </h1>

      {/* Grid Section */}
      <BentoGrid
        className="h-full w-11/12 sm:w-4/5 pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-10 sm:pb-12 md:pb-14 lg:pb-16"
      >
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
    </section>
  );
};

export default Grid;
