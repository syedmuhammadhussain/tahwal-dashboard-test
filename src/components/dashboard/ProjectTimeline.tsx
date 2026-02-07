"use client";

import { ChevronDown } from "lucide-react";
import { timelineEvents } from "@/data/mock-data";

export default function ProjectTimeline() {
  const completedCount = timelineEvents.filter(
    (e) => e.status === "completed"
  ).length;
  const progressPercent =
    ((completedCount - 0.5) / (timelineEvents.length - 1)) * 100;

  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <h2 className="text-[14px] lg:text-base font-bold text-text-primary">
          Project Timeline
        </h2>
        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm text-text-primary hover:bg-bg-main transition-colors">
          2026
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline — horizontally scrollable on small screens */}
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div style={{ minWidth: "700px" }}>
          {/* Track + Dots */}
          <div className="relative h-[12px] mx-[40px]">
            <div className="absolute inset-0 bg-[#E8ECF0] rounded-full" />

            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${progressPercent}%`,
                background: "linear-gradient(90deg, #34D399 0%, #10B981 100%)",
              }}
            />

            {timelineEvents.map((event, idx) => {
              const leftPercent = (idx / (timelineEvents.length - 1)) * 100;
              const isUpcoming = event.status === "upcoming";

              return (
                <div
                  key={idx}
                  className="absolute top-1/2"
                  style={{
                    left: `${leftPercent}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`w-[14px] h-[14px] rounded-full border-[2.5px] border-white shadow-md ${
                      isUpcoming ? "bg-[#DC2626]" : "bg-[#3B82F6]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Labels — same positioning as dots */}
          <div className="relative h-[50px] mx-[40px] mt-3">
            {timelineEvents.map((event, idx) => {
              const leftPercent = (idx / (timelineEvents.length - 1)) * 100;

              return (
                <div
                  key={idx}
                  className="absolute text-center"
                  style={{
                    left: `${leftPercent}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <p className="text-[12px] lg:text-[13px] text-text-secondary whitespace-nowrap">
                    {event.date}
                  </p>
                  <p className="text-[12px] lg:text-[13px] font-semibold text-text-primary mt-0.5 whitespace-nowrap">
                    {event.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
