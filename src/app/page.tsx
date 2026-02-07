"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ProjectTimeline from "@/components/dashboard/ProjectTimeline";
import StatsCards from "@/components/dashboard/StatsCards";
import ProgressStatus from "@/components/dashboard/ProgressStatus";
import ComplianceScore from "@/components/dashboard/ComplianceScore";
import TopPerformers from "@/components/dashboard/TopPerformers";
import RecentActivities from "@/components/dashboard/RecentActivities";
import MonthlyPerformance from "@/components/dashboard/MonthlyPerformance";
import AuditReadiness from "@/components/dashboard/AuditReadiness";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 lg:space-y-6">
        {/* Project Timeline */}
        <ProjectTimeline />

        {/* Summary Stats */}
        <StatsCards />

        {/* Progress Status Grid */}
        <ProgressStatus />

        {/* Middle Row: Compliance + Performers + Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <ComplianceScore />
          <TopPerformers />
          <RecentActivities />
        </div>

        {/* Bottom Row: Chart + Audit Readiness */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <MonthlyPerformance />
          </div>
          <AuditReadiness />
        </div>
      </div>
    </DashboardLayout>
  );
}
