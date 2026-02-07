"use client";

import {
  DoubleFileIcon,
  FileRightArrowIcon,
  FileSearchIcon,
  FileTopCheckIcon,
} from "@/lib/icons";

interface EvidenceCardsProps {
  total: number;
  underReview: number;
  inProgress: number;
  completed: number;
}

const cards = [
  {
    key: "total",
    label: "Total Evidence",
    Icon: DoubleFileIcon,
  },
  {
    key: "underReview",
    label: "Under Review Evidence",
    Icon: FileSearchIcon,
  },
  {
    key: "inProgress",
    label: "In Progress Evidence",
    Icon: FileRightArrowIcon,
  },
  {
    key: "completed",
    label: "Completed Evidence",
    Icon: FileTopCheckIcon,
  },
];

export default function EvidenceCards({
  total,
  underReview,
  inProgress,
  completed,
}: EvidenceCardsProps) {
  const values: Record<string, number> = {
    total,
    underReview,
    inProgress,
    completed,
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-4">
      {cards.map(({ key, label, Icon }) => (
        <div key={key} className="section-card flex items-center gap-3 p-3 lg:p-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xl lg:text-2xl font-bold text-text-primary">
              {values[key]}
            </p>
            <p className="text-xs lg:text-sm text-text-secondary truncate">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
