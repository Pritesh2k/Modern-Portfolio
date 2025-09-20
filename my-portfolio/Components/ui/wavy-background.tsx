"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  let animationId: number;
  let nt = 0;

  // Always use slow speed
  const SLOW_SPEED = 0.001;

  const drawWave = (ctx: CanvasRenderingContext2D, w: number, h: number, n: number) => {
    nt += SLOW_SPEED;
    const waveColors = colors ?? ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"];
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = containerRef.current.offsetWidth;
    const h = containerRef.current.offsetHeight;

    canvas.width = w;
    canvas.height = h;
    ctx.filter = `blur(${blur}px)`;
    ctx.globalAlpha = waveOpacity;
    ctx.fillStyle = backgroundFill || "transparent";
    ctx.fillRect(0, 0, w, h);

    drawWave(ctx, w, h, 5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    render();
    window.addEventListener("resize", render);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", render);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
