"use client";

import { useEffect, useRef, useCallback } from "react";

export default function AuditReadiness() {
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
    const percentage = 80;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    const endAngle = Math.PI + (Math.PI * percentage) / 100;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, endAngle, false);
    ctx.strokeStyle = "#22A558";
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    const tickLength = lineWidth * 1.1;
    const tickWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - tickLength / 2);
    ctx.lineTo(centerX, centerY - radius + tickLength / 2);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = tickWidth;
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
        Audit Readiness
      </h3>

      <div className="flex-1 flex flex-col items-center justify-end">
        <div className="relative w-full max-w-[350px]">
          <canvas
            ref={canvasRef}
            className="w-full"
            style={{ aspectRatio: "2 / 1.3" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-[14%]">
            <p className="text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold text-text-primary leading-none tracking-tight">
              80%
            </p>
            <p className="text-[11px] lg:text-[12px] text-text-secondary mt-0.5">
              Readiness Level
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="flex items-center justify-around w-full pt-3 lg:pt-4 mt-3 border-t border-[#E8ECF0]">
        <div className="text-center">
          <p className="text-[22px] lg:text-[26px] font-extrabold text-text-primary leading-tight">
            12
          </p>
          <p className="text-[11px] lg:text-[12px] text-text-secondary mt-0.5">
            Overdue Stds
          </p>
        </div>
        <div className="text-center">
          <p className="text-[22px] lg:text-[26px] font-extrabold text-text-primary leading-tight">
            5
          </p>
          <p className="text-[11px] lg:text-[12px] text-text-secondary mt-0.5">
            Missing Evidence
          </p>
        </div>
      </div>
    </div>
  );
}
