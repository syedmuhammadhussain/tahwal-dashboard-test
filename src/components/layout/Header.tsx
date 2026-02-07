"use client";

import { Search, Bell, ChevronDown, Menu } from "lucide-react";

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

export default function Header({ onMobileMenuToggle }: HeaderProps) {
  return (
    <header className="h-14 lg:h-16 bg-white border-b border-border flex items-center justify-between px-3 sm:px-4 lg:px-6">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 -ml-1 rounded-lg hover:bg-bg-main transition-colors"
        >
          <Menu className="w-5 h-5 text-text-primary" />
        </button>

        {/* Desktop: full search bar */}
        <div className="hidden lg:block relative w-full max-w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm bg-[#F5F8FA] border border-border rounded-lg outline-none focus:border-primary/30 transition-colors placeholder:text-text-light"
          />
        </div>

        {/* Mobile/Tablet: search icon only */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-bg-main transition-colors">
          <Search className="w-5 h-5 text-text-secondary" />
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-bg-main transition-colors">
          <Bell className="w-5 h-5 text-text-secondary" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* User Profile — desktop shows name, mobile shows icon only */}
        <button className="flex items-center gap-2 bg-[#F9FAFA] rounded-4xl px-2 py-1.5 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-semibold text-primary">M</span>
          </div>
          <span className="hidden sm:inline text-sm font-medium text-text-primary">
            Mohamed
          </span>
          <ChevronDown className="hidden sm:block w-4 h-4 text-text-secondary" />
        </button>
      </div>
    </header>
  );
}
