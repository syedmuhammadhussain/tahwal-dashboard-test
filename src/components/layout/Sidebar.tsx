"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import logo from "../../logo.svg";
import {
  DashboardIcon,
  Documents,
  LeftArrowSidebarIcon,
  Perspectives,
  Reports,
  Tasks,
  UsersRolesIcon,
} from "@/lib/icons";

const navItems = [
  { label: "Dashboard", icon: DashboardIcon, href: "/" },
  { label: "Perspectives", icon: Perspectives, href: "#" },
  { label: "Tasks", icon: Tasks, href: "#" },
  { label: "Documents", icon: Documents, href: "#" },
  { label: "Reports", icon: Reports, href: "#" },
  { label: "Users & Roles", icon: UsersRolesIcon, href: "#" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-bg-sidebar flex flex-col transition-all duration-300 ease-in-out z-50",
        // Desktop: always visible, respects collapsed state
        "hidden lg:flex",
        collapsed ? "lg:w-[70px]" : "lg:w-[256px]",
        // Mobile: overlay drawer
        mobileOpen && "!flex w-[280px]",
      )}
    >
      {/* Logo + Mobile close */}
      <div className="flex items-center justify-between px-4 py-3 min-h-[64px]">
        <div className="flex items-center gap-2 overflow-hidden">
          <Image src={logo} alt="TAHWUL logo" width={100} height={40} />
        </div>
        {/* Mobile close button */}
        <button
          onClick={onMobileClose}
          className="lg:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop toggle button — hidden on mobile */}
      <button
        onClick={onToggle}
        className="hidden lg:flex absolute -right-4 top-[18px] z-50 bg-white border border-border rounded-full w-8 h-8 items-center justify-center hover:bg-gray-50 transition-colors"
        style={{
          transform: `${collapsed ? "rotate(180deg)" : "rotate(0deg)"}`,
        }}
      >
        <LeftArrowSidebarIcon />
      </button>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || (item.href === "/" && pathname === "/");
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onMobileClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-[#98AEC01A] text-white"
                  : "text-[var(--color-light-thing)] hover:text-white hover:bg-white/10",
                // Desktop collapsed: center icon
                collapsed && !mobileOpen
                  ? "lg:justify-center"
                  : "justify-start",
              )}
            >
              {/* Desktop collapsed: icon only */}
              {collapsed && !mobileOpen ? (
                <>
                  <Icon className="hidden lg:block w-[20px] h-[20px] shrink-0" />

                  {/* Mobile always shows full nav */}
                  {/* <Icon className="lg:hidden w-[18px] h-[18px] shrink-0" /> */}
                  <span className="lg:hidden text-sm font-medium whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                </>
              ) : (
                <>
                  <Icon className="w-[18px] h-[18px] shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
