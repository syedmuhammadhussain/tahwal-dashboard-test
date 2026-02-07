"use client";

interface OverviewTabProps {
  overview: {
    objective: string;
    implementationRequirements: string;
    evidenceDocuments: string;
    relatedRegulations: string;
    scope: string;
  };
  leaders: Array<{
    name: string;
    role: string;
    avatar: string;
  }>;
}

const sections = [
  { key: "objective", label: "Objective" },
  { key: "implementationRequirements", label: "Implementation\nRequirements" },
  { key: "evidenceDocuments", label: "Evidence\nDocuments" },
  { key: "relatedRegulations", label: "Related\nRegulations" },
  { key: "scope", label: "Scope" },
];

export default function OverviewTab({ overview, leaders }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Content Rows */}
      <div className="section-card space-y-4 p-3 sm:p-4 lg:p-5">
        {sections.map(({ key, label }) => (
          <div key={key} className="flex flex-col md:flex-row gap-2 md:gap-3 md:items-stretch">
            {/* Left label card */}
            <div className="w-full md:w-[180px] shrink-0 bg-[#F1F5F9] rounded-xl px-4 py-3 md:py-4 flex items-start border-l-[3px] border-[#CBD5E1]">
              <span className="text-[13px] lg:text-base text-text-primary whitespace-pre-line leading-[1.4]">
                {label}
              </span>
            </div>

            {/* Right content card */}
            <div className="flex-1 bg-[#F5F8FA] rounded-xl px-4 py-3 md:px-5 md:py-4">
              <p className="text-[13px] lg:text-base text-text-primary leading-[1.7] whitespace-pre-line">
                {overview[key as keyof typeof overview]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Leaders Section */}
      <div className="section-card">
        <h3 className="text-base font-bold text-text-primary mb-4">Leaders</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-wrap">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#F5F8FA] rounded-xl px-4 py-2.5 w-full sm:w-auto"
            >
              <div className="w-11 h-11 rounded-full bg-[var(--color-border)] flex items-center justify-center text-base font-bold overflow-hidden shrink-0">
                {leader.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="min-w-0">
                <p className="text-sm lg:text-base font-semibold text-text-primary truncate">
                  {leader.name}
                </p>
                <p className="text-xs lg:text-base text-text-secondary">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
