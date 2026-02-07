"use client";

import Link from "next/link";
import { perspectives } from "@/data/mock-data";
import type { StatusDot } from "@/data/mock-data";

const statusColors: Record<string, string> = {
  "not-started": "bg-status-not-started",
  "in-progress": "bg-status-in-progress",
  completed: "bg-status-completed",
  partially: "bg-status-partially",
  fully: "bg-status-fully",
  delayed: "bg-status-delayed",
};

const legendItems = [
  { label: "Not Started", color: "bg-status-not-started" },
  { label: "In Progress", color: "bg-status-in-progress" },
  { label: "Completed", color: "bg-status-completed" },
  { label: "Partially Uploaded", color: "bg-status-partially" },
  { label: "Fully Uploaded", color: "bg-status-fully" },
  { label: "Delayed", color: "bg-status-delayed" },
];

function StatusDotBadge({ dot }: { dot: StatusDot }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-[26px] h-[26px] rounded-full text-white text-[14px] font-medium ${
        statusColors[dot.status]
      }`}
    >
      {dot.value}
    </span>
  );
}

export default function ProgressStatus() {
  return (
    <div className="section-card overflow-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 lg:mb-5 gap-3">
        <h2 className="text-[14px] lg:text-base font-bold text-text-primary whitespace-nowrap">
          Progress Status
        </h2>
        <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span className={`w-[8px] lg:w-[9px] h-[8px] lg:h-[9px] rounded-full ${item.color}`} />
              <span className="text-[10px] lg:text-sm text-text-primary font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable grid wrapper */}
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div
          className="grid grid-cols-10 gap-4 items-stretch"
          style={{ minWidth: "1000px" }}
        >
          {perspectives.map((perspective) => (
            <div key={perspective.name} className="flex flex-col gap-2">
              {/* Perspective Header */}
              <Link
                href="/details/digital-transformation-strategic-planning"
                className="rounded-xl block bg-primary text-white px-2 py-3 text-center hover:bg-primary-light transition-colors"
              >
                <p className="text-[11px] font-bold whitespace-pre-line leading-[1.3] min-h-[28px] flex items-center justify-center">
                  {perspective.name}
                </p>
                <div className="mt-2 mx-auto">
                  <span className="inline-block text-[13px] font-bold bg-white/15 rounded-full px-3 py-[3px]">
                    {perspective.percentage}
                  </span>
                </div>
              </Link>

              {/* Subcategories wrapper — stretches to fill column */}
              <div className="flex-1 flex flex-col gap-2">
                {perspective.subCategories.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-[#F7F9FB] border border-[#E8ECF0] rounded-xl px-2 py-2.5 flex flex-col items-center justify-start"
                  >
                    {sub.name && (
                      <p className="text-[11px] text-primary mb-3 whitespace-pre-line leading-[1.3] text-center mb-6">
                        {sub.name}
                      </p>
                    )}
                    <div className="flex flex-auto items-center">
                      <div
                        className={`flex flex-1 flex-wrap grid ${sub.dots?.length < 2 ? "grid-cols-2" : sub.dots?.length < 6 ? "grid-cols-3" : "grid-cols-2"} gap-2 justify-items-center`}
                      >
                        {sub.dots.map((dot, dotIdx) => (
                          <StatusDotBadge key={dotIdx} dot={dot} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
