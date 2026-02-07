"use client";

import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LeftArrowIcon } from "@/lib/icons";

interface DetailHeaderProps {
  title: string;
  category: string;
  description: string;
  progress: number;
}

export default function DetailHeader({
  title,
  category,
  description,
  progress,
}: DetailHeaderProps) {
  const data = [
    { name: "Progress", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  return (
    <div>
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm lg:text-base font-bold text-primary hover:text-primary-light transition-colors mb-4 ml-1"
      >
        <LeftArrowIcon />
        <span className="truncate">{title}</span>
      </Link>

      {/* Header Card */}
      <div className="section-card flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] rounded-full border border-info/20 mb-2">
            {category}
          </span>
          <h1 className="text-sm lg:text-base font-bold text-text-primary">{title}</h1>
          <p className="text-xs lg:text-sm text-text-secondary mt-1">{description}</p>
        </div>

        {/* Progress Circle */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 self-center sm:self-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={28}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#22C55E" />
                <Cell fill="#E5E7EB" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs sm:text-sm font-bold text-text-primary">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
