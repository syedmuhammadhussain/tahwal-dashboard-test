# TAHWUL - Digital Transformation Dashboard

A modern, responsive dashboard application built for digital transformation and compliance tracking. This project implements three screens from the provided Figma design mockups.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts (lightweight charting library)
- **Icons**: Lucide React (tree-shakeable SVG icons)
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with font & metadata
│   ├── page.tsx                # Dashboard (Screen 1)
│   ├── globals.css             # Tailwind v4 theme & global styles
│   └── details/[id]/
│       └── page.tsx            # Detail page with Overview/Evidence tabs (Screens 2 & 3)
├── components/
│   ├── layout/                 # Layout components
│   │   ├── DashboardLayout.tsx # Main layout wrapper
│   │   ├── Sidebar.tsx         # Collapsible sidebar with animation
│   │   └── Header.tsx          # Top header with search & profile
│   ├── dashboard/              # Dashboard-specific components
│   │   ├── ProjectTimeline.tsx # Timeline with progress indicators
│   │   ├── StatsCards.tsx      # Summary statistics row
│   │   ├── ProgressStatus.tsx  # Perspectives grid with status dots
│   │   ├── ComplianceScore.tsx # Donut chart for compliance
│   │   ├── TopPerformers.tsx   # Leader performance list
│   │   ├── RecentActivities.tsx# Activity feed
│   │   ├── MonthlyPerformance.tsx # Bar chart (12-month)
│   │   └── AuditReadiness.tsx  # Semi-circular gauge
│   └── details/                # Detail page components
│       ├── DetailHeader.tsx    # Page header with progress ring
│       ├── EvidenceCards.tsx   # Evidence summary cards
│       ├── OverviewTab.tsx     # Structured content table + leaders
│       └── EvidenceTab.tsx     # Data table, comments, activities
├── data/
│   └── mock-data.ts            # All static/mocked JSON data
└── lib/
    └── utils.ts                # Utility functions (cn helper)
    └── icons.tsx               # Svg Icons 
```

## 🏃 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) for the Dashboard, and click any perspective card header to navigate to the Detail page.

## 🏗️ How I Built It

### Architecture Decisions

1. **Next.js App Router** with `"use client"` directives since this is a static dashboard — no SSR needed for the data-heavy chart components.
2. **Component composition** — every UI section is its own component with clear props interfaces, making them reusable and testable.
3. **Centralized mock data** — all data lives in `src/data/mock-data.ts` with full TypeScript types, making it trivial to swap in a real API later.
4. **Tailwind v4 CSS theme** — colors, fonts, and design tokens defined in `globals.css` using the `@theme` block for consistency.

### Key Features

- **Collapsible sidebar** with smooth CSS transitions and icon-only mode
- **Recharts** for all charts (donut, bar, gauge) — lightweight and tree-shakeable
- **Lucide React** for SVG icons — only imports what's used
- **Tab navigation** on the detail page switches between Overview and Evidence views
- **Sortable table headers** on the Evidence tab
- **Comment system** with input area and post button

### Assumptions

- Used mocked/static data as instructed — no backend or API calls
- Font is Inter (loaded from Google Fonts) to match the clean dashboard aesthetic
- Sidebar navigation items beyond Dashboard are placeholder links
- Avatar images use initial-based placeholders instead of actual photos
- Desktop-first responsive approach — layout remains usable at smaller widths

## 🔮 What I Would Improve With More Time

1. **Full responsiveness** — add proper mobile breakpoints with hamburger menu for sidebar
2. **Dark mode** support using Tailwind's dark variant
3. **Loading skeletons** for each card/section component
4. **Unit tests** with React Testing Library for each component
5. **Accessibility** — full ARIA labels, keyboard navigation, screen reader support
6. **Animation** — page transitions using Framer Motion, staggered card animations
7. **Real data layer** — React Query / SWR with API routes for data fetching
8. **Internationalization** — RTL support for Arabic content
9. **E2E tests** with Playwright for critical user flows

## 📝 Screens Implemented

| # | Screen | Route | Description |
|---|--------|-------|-------------|
| 1 | Dashboard | `/` | Project timeline, stats, progress grid, charts |
| 2 | Detail - Overview | `/details/[id]` (Overview tab) | Strategic planning content sections, leaders |
| 3 | Detail - Evidence | `/details/[id]` (Evidence tab) | Document table, comments, activities |
