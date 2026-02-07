"use client";

import { summaryStats } from "@/data/mock-data";
import {
  HomeIcon,
  FileCheckIcon,
  FolderIcon,
  FileInfoIcon,
  FileUploadIcon,
  FolderCheckIcon,
} from "@/lib/icons";

const iconMap = {
  trophy: HomeIcon,
  folder: FolderIcon,
  "folder-check": FolderCheckIcon,
  "file-text": FileInfoIcon,
  refresh: FileCheckIcon,
  upload: FileUploadIcon,
};

const cardStyles = [
  { bg: "bg-[#FFF8F0]", iconColor: "text-[#D97706]" },
  { bg: "bg-[#FFF5F0]", iconColor: "text-[#EA580C]" },
  { bg: "bg-[#F0F7FF]", iconColor: "text-[#2563EB]" },
  { bg: "bg-[#F0FDF4]", iconColor: "text-[#16A34A]" },
  { bg: "bg-[#F0FDFA]", iconColor: "text-[#0D9488]" },
  { bg: "bg-[#ECFEFF]", iconColor: "text-[#0891B2]" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
      {summaryStats.map((stat, idx) => {
        const Icon = iconMap[stat.icon];
        const style = cardStyles[idx];
        return (
          <div
            key={stat.label}
            className="bg-white st-card rounded-xl px-3 py-3 lg:px-4 lg:py-3.5 flex items-start justify-between"
          >
            <div>
              <p className="text-xl lg:text-2xl font-bold text-text-primary leading-tight">
                {stat.value}
              </p>
              <p className="text-xs lg:text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
            <Icon
              className={`w-5 h-5 ${style.iconColor} shrink-0 mt-1`}
              strokeWidth={1.8}
            />
          </div>
        );
      })}
    </div>
  );
}
