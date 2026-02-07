"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ComplianceScore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawGauge = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h * 0.75;
    const radius = Math.min(w * 0.42, h * 0.55);
    const lineWidth = radius * 0.11;
    const percentage = 65;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.strokeStyle = "#E8ECF0";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    const endAngle = Math.PI + (Math.PI * percentage) / 100;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, endAngle, false);
    ctx.strokeStyle = "#DB1F26";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();
  }, []);

  useEffect(() => {
    drawGauge();
    const handleResize = () => drawGauge();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawGauge]);

  return (
    <div className="section-card flex flex-col h-full">
      <h3 className="text-[14px] lg:text-[15px] font-bold text-text-primary">
        Overall Compliance Score
      </h3>

      <div className="flex-1 flex flex-col items-center justify-end pb-2">
        <div className="relative w-full max-w-[380px]">
          <canvas
            ref={canvasRef}
            className="w-full"
            style={{ aspectRatio: "2 / 1.3" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-[14%]">
            <p className="text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold text-text-primary leading-none tracking-tight">
              65%
            </p>
            <p className="text-[12px] lg:text-[14px] text-[#B0B8C4] mt-1">
              Basic Standards 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
