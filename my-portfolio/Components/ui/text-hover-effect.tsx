"use client";
import React from "react";

export const TextHoverEffect = ({
  text,
}: {
  text: string;
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      {/* Solid text only, no hover effect */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-white font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
