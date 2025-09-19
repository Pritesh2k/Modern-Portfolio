'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { FaAws, FaCode, FaCodeBranch, FaCopy, FaInfinity, FaJava, FaPython, FaReact } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center px-2 md:px-4 lg:px-0">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mx-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('priteshparekh237@gmail.com');
    setCopied(true);
  };

  const titleHoverClass = (id === 1 || id === 2 || id === 6)
    ? "group-hover:scale-105 transition-transform duration-200"
    : "";

  const itemHoverClass = (id === 3 || id === 4)
    ? "group-hover:-translate-y-2 md:group-hover:-translate-y-3 transition-transform duration-200"
    : id === 5
      ? "group-hover:translate-x-2 md:group-hover:translate-x-5 transition-transform duration-200"
      : "";

  const contentFlexClass = id === 1
    ? "flex flex-col items-center justify-center text-center"
    : id === 2
      ? "flex flex-col items-center justify-start text-center"
      : id === 3
        ? "flex flex-col items-start justify-center text-left"
        : id === 6 || id === 4
          ? "flex flex-col items-center justify-center text-center"
          : "flex flex-col";

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group shadow-input dark:shadow-none border border-white/[0.1]",
        className,
        itemHoverClass
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* Image Background */}
      <div className="w-full h-full absolute">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover object-center w-full h-full')}
          />
        )}
      </div>

      {spareImg && (
        <div className="absolute right-0 bottom-0 w-full">
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}

      {/* Content */}
      <div className={cn(
        titleClassName,
        `${contentFlexClass} px-4 md:px-5 lg:px-8 py-4 md:py-6 lg:py-8 min-h-[200px] md:min-h-[220px] lg:min-h-[260px] transition-transform duration-200`,
        itemHoverClass
      )}>
        {/* ID 3: description + title together */}
        {id === 3 ? (
          <div className="flex flex-col gap-2 z-10">
            <div className="font-sans font-extralight text-[#c1c2d3] text-xs sm:text-sm md:text-base lg:text-lg">
              {description}
            </div>
            <div className={cn(
              "font-sans font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl max-w-full",
              titleHoverClass
            )}>
              {title}
            </div>
          </div>
        ) : (
          <>
            <div className="font-sans font-extralight text-[#c1c2d3] text-xs sm:text-sm md:text-base lg:text-lg z-10">
              {description}
            </div>
            <div className={cn(
              "font-sans font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl max-w-full z-10 mt-2",
              titleHoverClass
            )}>
              {title}
            </div>
          </>
        )}

        {/* ID 2 GridGlobe */}
        {id === 2 && <div className="mt-2 md:mt-4"><GridGlobe /></div>}

        {/* ID 3 Lists */}
        {id === 3 && (
          <div className="mt-4 flex flex-wrap gap-2 md:gap-3 z-10 w-full justify-start">
            {[
              <FaReact key="react" color="#00fff2" />, 'React.js', 'Next.js',
              <FaJava key="java" color="#ff6800" />, 'Typescript', <FaPython key="python" color="#e7ff00" />,
              'JavaScript', 'Python', <FaCodeBranch key="branch" color="#ffc5fe" />, 'Java', <FaCode key="code" />,
            ].map((item, index) => (
              <span
                key={typeof item === 'string' ? item : `icon-${index}`}
                className="py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 text-xs md:text-sm lg:text-base opacity-60 lg:opacity-100 rounded-lg text-center bg-[#10132E] flex-none"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* ID 6 Button & Lottie */}
        {id === 6 && (
          <div className="mt-3 md:mt-4 relative w-full flex items-center justify-center gap-3">
            <div className="absolute -bottom-8 md:-bottom-10 transform w-full h-24 md:w-28 md:h-28 pointer-events-none flex justify-center items-center">
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
                }}
              />
            </div>

            <div className="w-full flex justify-center">
              <MagicButton
                title={copied ? 'Email Copied!' : 'Copy My Email'}
                position="left"
                otherClasses="opacity-99 bg-white-200 px-7 text-sm text-white font-bold backdrop-blur-3xl gap-3"
                icon={<FaCopy color="red" />}
                handleClick={handleCopy}
              />
            </div>
          </div>

        )}
      </div>
    </div>
  );
};
