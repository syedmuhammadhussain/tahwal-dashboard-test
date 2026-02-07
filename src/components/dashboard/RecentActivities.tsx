"use client";

import React from "react";
import { recentActivities } from "@/data/mock-data";

export default function RecentActivities() {
  return (
    <div className="section-card pt-2">
      <h3 className="text-[14px] lg:text-[16px] font-bold text-text-primary mb-2">
        Recent Activities
      </h3>
      <div className="space-y-3">
        {recentActivities.map((activity, idx) => (
          <React.Fragment key={idx}>
            <hr className="flex-grow border border-border border-color-[var(--color-border)]" />
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="mt-2.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] lg:text-[16px] text-text-primary leading-relaxed">
                  {activity.text}
                </p>
              </div>
              <span className="text-[10px] lg:text-[12px] text-text-light whitespace-nowrap shrink-0 mt-1">
                {activity.time}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
