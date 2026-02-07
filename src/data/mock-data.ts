// ==========================================
// Dashboard Mock Data
// ==========================================

export const timelineEvents = [
  { date: "Mar 17", label: "Kickoff Workshop", status: "completed" as const },
  { date: "March 18", label: "Data Collection", status: "completed" as const },
  { date: "May 8", label: "Initial Phase", status: "in-progress" as const },
  { date: "May 9–July 12", label: "Verification", status: "upcoming" as const },
  { date: "July 13", label: "Completion Reviews", status: "upcoming" as const },
  { date: "August 21", label: "Cycle Conclusion", status: "upcoming" as const },
];

export const summaryStats = [
  { label: "Overall Progress", value: "78.65%", icon: "trophy" as const },
  { label: "Total Criteria", value: "95", icon: "folder" as const },
  { label: "Completed Criteria", value: "52", icon: "folder-check" as const },
  { label: "Evidence Documents", value: "386", icon: "file-text" as const },
  { label: "Evidence (Completed)", value: "302", icon: "refresh" as const },
  { label: "Uploaded To DGA", value: "258", icon: "upload" as const },
];

export type StatusDot = {
  value: number;
  status:
    | "not-started"
    | "in-progress"
    | "completed"
    | "partially"
    | "fully"
    | "delayed";
};

export type SubCategory = {
  name: string;
  dots: StatusDot[];
};

export type PerspectiveData = {
  name: string;
  percentage: string;
  color: string;
  subCategories: SubCategory[];
};

export const perspectives: PerspectiveData[] = [
  {
    name: "Strategy And\nPlanning",
    percentage: "97.78%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Digital Transformation",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Governance",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "in-progress" },
        ],
      },
      {
        name: "Enterprise Architecture",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Organization\nAnd Culture",
    percentage: "70.83%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Digital Culture And\nEnvironment",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "completed" },
        ],
      },
      {
        name: "Leadership\nDevelopment",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
        ],
      },
      {
        name: "Skills & Capacity\nBuilding",
        dots: [
          { value: 1, status: "in-progress" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    name: "Operations\nAnd Execution",
    percentage: "80.00%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Business\nProcesses",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
          { value: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Business\nContinuity",
    percentage: "90.59%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Risk Management",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
          { value: 5, status: "completed" },
        ],
      },
      {
        name: "Business Continuity",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "not-started" },
          { value: 3, status: "not-started" },
          { value: 4, status: "completed" },
          { value: 5, status: "completed" },
          { value: 6, status: "not-started" },
          { value: 7, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Information\nTechnology",
    percentage: "75.00%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Support Systems",
        dots: [
          { value: 1, status: "fully" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
          { value: 5, status: "completed" },
        ],
      },
      {
        name: "IT Infrastructure",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
          { value: 5, status: "partially" },
          { value: 6, status: "completed" },
          { value: 6, status: "completed" },
        ],
      },
      {
        name: "Cloud Infrastructure",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "partially" },
        ],
      },
    ],
  },
  {
    name: "Comprehensive\nGovernance",
    percentage: "64.44%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Governance\nPlatforms",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "not-started" },
          { value: 5, status: "completed" },
          { value: 6, status: "completed" },
          { value: 7, status: "completed" },
          { value: 8, status: "completed" },
          { value: 9, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Channels And\nServices",
    percentage: "100%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Service Quality",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Channels",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "completed" },
          { value: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Beneficiary\nCentralization",
    percentage: "60.00%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "User Engagement",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
          { value: 4, status: "in-progress" },
        ],
      },
      {
        name: "User Relationship",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
        ],
      },
      {
        name: "User Experience",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "completed" },
          { value: 4, status: "in-progress" },
          { value: 5, status: "completed" },
        ],
      },
    ],
  },
  {
    name: "Government\nData",
    percentage: "87.50%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Data Governance",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
        ],
      },
      {
        name: "Data Usage &\nAvailability",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "in-progress" },
          { value: 3, status: "in-progress" },
        ],
      },
      {
        name: "Open Data",
        dots: [
          { value: 1, status: "completed" },
          { value: 2, status: "completed" },
          { value: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    name: "Research And\nInnovation",
    percentage: "17.65%",
    color: "#1B2B4B",
    subCategories: [
      {
        name: "Innovation",
        dots: [
          { value: 1, status: "delayed" },
          { value: 2, status: "delayed" },
          { value: 3, status: "delayed" },
          { value: 4, status: "delayed" },
        ],
      },
      {
        name: "Creative Solutions",
        dots: [
          { value: 1, status: "in-progress" },
          { value: 2, status: "delayed" },
        ],
      },
    ],
  },
];

export const topPerformers = [
  {
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    score: "96%",
    avatar: "/avatars/ahmed.jpg",
  },
  {
    name: "Sarah Al-Khaled",
    role: "Beneficiary Perspective",
    score: "94%",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Mohammad Al-Mansour",
    role: "IT Perspective",
    score: "92%",
    avatar: "/avatars/mohammad.jpg",
  },
];

export const recentActivities = [
  {
    text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: "5 Mins Ago",
    type: "upload" as const,
  },
  {
    text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: "20 Mins Ago",
    type: "task" as const,
  },
  {
    text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: "1 Hour Ago",
    type: "create" as const,
  },
];

export const monthlyPerformanceData = [
  { month: "Jan", actual: 87 },
  { month: "Feb", actual: 75 },
  { month: "Mar", actual: 80 },
  { month: "Apr", actual: 42 },
  { month: "May", actual: 87 },
  { month: "Jun", actual: 78 },
  { month: "Jul", actual: 55 },
  { month: "Aug", actual: 87 },
  { month: "Sept", actual: 78 },
  { month: "Oct", actual: 55 },
  { month: "Nov", actual: 85 },
  { month: "Dec", actual: 78 },
];

// ==========================================
// Details Page Mock Data
// ==========================================

export const detailPageData = {
  id: "digital-transformation-strategic-planning",
  title: "Digital Transformation Strategic Planning",
  category: "Strategy & Planning",
  description:
    "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals",
  progress: 100,
  evidenceSummary: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  overview: {
    objective:
      "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    implementationRequirements:
      "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:\nA. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.\nB. Strategic Initiatives, Programs, And Performance Indicators.\nC. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.\nD. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.",
    evidenceDocuments:
      "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
    relatedRegulations:
      "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
    scope: "All Government Entities.",
  },
  leaders: [
    {
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      avatar: "/avatars/ahmed.jpg",
    },
    {
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      avatar: "/avatars/ahmed2.jpg",
    },
  ],
  evidenceDocuments: [
    {
      number: "5.4.1.1",
      name: "Digital_Transformation_Plan.Pdf",
      lead: "Ahmed Khaled",
      preparer: "Ahmed Khaled",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Approved" as const,
    },
    {
      number: "5.4.1.2",
      name: "KPI_Framework.Xlsx",
      lead: "Mona Hamed",
      preparer: "Mona Hamed",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Pending Review" as const,
    },
    {
      number: "5.4.1.3",
      name: "Roadmap_Version1.Docx",
      lead: "Rami AlSharif",
      preparer: "Rami AlSharif",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Pending Review" as const,
    },
  ],
  comments: [
    {
      author: "Sara Ibrahim",
      initial: "E",
      date: "2025-08-05",
      text: "Ensure The Plan Includes A Clear Governance Model.",
    },
    {
      author: "Mona Hamed",
      initial: "M",
      date: "2025-08-05",
      text: "Ensure The Plan Includes A Clear Governance Model.",
    },
  ],
  detailActivities: [
    {
      text: "Roadmap_Version1.Docx Uploaded By Rami AlSharif",
      time: "5 Mins Ago",
    },
    { text: "KPI_Framework.Xlsx Uploaded By Mona Hamed", time: "20 Mins Ago" },
    {
      text: "Digital_Transformation_Plan.Pdf Approved By Advisory Team",
      time: "1 Hour Ago",
    },
  ],
};

export const sidebarNavItems = [
  { label: "Dashboard", icon: "layout-dashboard" as const, href: "/" },
  { label: "Perspectives", icon: "compass" as const, href: "#" },
  { label: "Tasks", icon: "clipboard-list" as const, href: "#" },
  { label: "Documents", icon: "folder" as const, href: "#" },
  { label: "Reports", icon: "bar-chart-3" as const, href: "#" },
  { label: "Users & Roles", icon: "users" as const, href: "#" },
];
