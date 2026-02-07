"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DetailHeader from "@/components/details/DetailHeader";
import EvidenceCards from "@/components/details/EvidenceCards";
import OverviewTab from "@/components/details/OverviewTab";
import EvidenceTab from "@/components/details/EvidenceTab";
import { detailPageData } from "@/data/mock-data";
import { cn } from "@/lib/utils";

type Tab = "overview" | "evidence";

export default function DetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "evidence", label: "Evidence" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 lg:space-y-5">
        {/* Header */}
        <DetailHeader
          title={detailPageData.title}
          category={detailPageData.category}
          description={detailPageData.description}
          progress={detailPageData.progress}
        />

        {/* Evidence Summary Cards */}
        <EvidenceCards
          total={detailPageData.evidenceSummary.total}
          underReview={detailPageData.evidenceSummary.underReview}
          inProgress={detailPageData.evidenceSummary.inProgress}
          completed={detailPageData.evidenceSummary.completed}
        />

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 bg-[var(--color-border)] rounded-xl p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-4 lg:px-5 py-2 text-[13px] lg:text-sm font-medium rounded-lg transition-all duration-200",
                activeTab === tab.key
                  ? "bg-white text-text-primary shadow-sm"
                  : "text-secondary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" ? (
          <OverviewTab
            overview={detailPageData.overview}
            leaders={detailPageData.leaders}
          />
        ) : (
          <EvidenceTab
            documents={detailPageData.evidenceDocuments}
            comments={detailPageData.comments}
            activities={detailPageData.detailActivities}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
