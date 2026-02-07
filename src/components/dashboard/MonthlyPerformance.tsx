"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { monthlyPerformanceData } from "@/data/mock-data";

// Custom bar shape with bottom shadow glow
const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  if (!height || height <= 0) return null;

  const radius = 5;
  const shadowBlur = 12;
  const shadowOffsetY = 4;

  return (
    <g>
      <defs>
        <filter id={`shadow-${x}`} x="-40%" y="-10%" width="180%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={shadowBlur / 2} />
          <feOffset dx={0} dy={shadowOffsetY} />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
          <feColorMatrix
            type="matrix"
            values="0.1 0 0 0 0.3  0 0.1 0 0 0.5  0 0 0.2 0 0.8  0 0 0 1 0"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={`
          M ${x},${y + height}
          L ${x},${y + radius}
          Q ${x},${y} ${x + radius},${y}
          L ${x + width - radius},${y}
          Q ${x + width},${y} ${x + width},${y + radius}
          L ${x + width},${y + height}
          Z
        `}
        fill={fill}
        filter={`url(#shadow-${x})`}
      />
    </g>
  );
};

export default function MonthlyPerformance() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="section-card h-full">
      <h3 className="text-[14px] lg:text-[15px] font-bold text-text-primary mb-4 lg:mb-5">
        12-Month Performance
      </h3>

      {/* Scrollable wrapper for small screens */}
      <div className="overflow-x-auto -mx-3 px-3 lg:mx-0 lg:px-0">
        <div className="min-w-[500px]" style={{ height: 260 }}>
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyPerformanceData}
                barSize={36}
                barCategoryGap="18%"
              >
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0078D7" />
                    <stop offset="50%" stopColor="#88baff" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E8ECF0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#6B7280", fontWeight: 500 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  dx={-6}
                  width={30}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  cursor={{ fill: "rgba(0,0,0,0.02)" }}
                />
                <Bar
                  dataKey="actual"
                  fill="url(#barGradient)"
                  shape={<CustomBar />}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full bg-bg-main rounded-lg animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
