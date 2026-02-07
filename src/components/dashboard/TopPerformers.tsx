"use client";

import React from "react";
import { topPerformers } from "@/data/mock-data";

const avatarColors = [
  "bg-amber-100 text-amber-700",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
];

export default function TopPerformers() {
  return (
    <div className="section-card">
      <h3 className="text-[14px] lg:text-[16px] font-bold text-text-primary mb-4">
        Top Performing Perspective Leaders
      </h3>

      <div className="space-y-4">
        {topPerformers.map((performer, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-[14px] lg:text-[16px] font-bold shrink-0 ${avatarColors[idx]}`}
                >
                  {performer.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] lg:text-[16px] font-medium text-text-primary truncate">
                    {performer.name}
                  </p>
                  <p className="text-[13px] lg:text-[16px] text-text-secondary truncate">
                    {performer.role}
                  </p>
                </div>
              </div>
              <span className="text-[14px] lg:text-[16px] font-bold text-text-primary shrink-0">
                {performer.score}
              </span>
            </div>
            {idx !== topPerformers.length - 1 ? (
              <hr className="flex-grow border border-border border-color-[var(--color-border)]" />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
