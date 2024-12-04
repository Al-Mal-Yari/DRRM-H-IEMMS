import React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import HomeNavBar from "@/components/dashboard/HomeNavBar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed width on the left */}
      <div className="w-56 bg-red-900 text-slate-50">
        <Sidebar />
      </div>

      {/* Main Content Area - Flex column layout */}
      <div className="flex-1 flex flex-col bg-slate-100">
        {/* Header - Fixed at the top */}
        <Header />

        {/* HomeNavBar - Positioned below Header */}
        <div className="bg-white shadow-md">
          <HomeNavBar />
          {children}
        </div>
    </div>
  </div>
  );
}
