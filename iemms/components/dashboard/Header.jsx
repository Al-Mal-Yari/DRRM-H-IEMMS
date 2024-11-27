import { History, Bell, Settings, Plus } from 'lucide-react';
import React from 'react';
import SearchInput from './SearchInput';

export default function Header() {
  const icons = [
    { Icon: History, label: "Recent Activities" },
    { Icon: Bell, label: "Notifications" },
    { Icon: Settings, label: "Settings" },
  ];

  return (
    <div className="bg-gray-100 h-14 w-full flex items-center justify-between px-8 shadow-lg sticky top-0 z-10">
      {/* Left Section: History and Search */}
      <div className="flex items-center gap-4 ml-3">
        {/* Icon Tooltip: Recent Activities */}
        <TooltipButton icon={History} label="Recent Activities" />

        {/* Search Input */}
        <SearchInput />
      </div>

      {/* Right Section: Plus, Bell, Settings */}
      <div className="flex items-center gap-6">
        {/* Plus Icon */}
        <TooltipButton
          icon={Plus}
          label="Add New"
          buttonClass="text-white bg-[#800000] hover:bg-[#660000] focus:ring-4 focus:ring-red-300 rounded-lg p-2"
          iconSize="w-4 h-4"
        />

        {/* Border between Plus and Other Icons */}
        <div className="h-6 border-r border-gray-300"></div>

        {/* Other Icons: Bell and Settings */}
        {icons.map(({ Icon, label }) => (
          <TooltipButton key={label} icon={Icon} label={label} />
        ))}

        {/* Final Border */}
        <div className="h-6 border-r border-gray-300"></div>
      </div>
    </div>
  );
}

function TooltipButton({ icon: Icon, label, buttonClass = '', iconSize = 'w-6 h-6' }) {
  return (
    <div className="relative group">
      <button className={buttonClass}>
        <Icon className={`${iconSize} hover:text-gray-500`} />
      </button>
      <span
        className="absolute left-1/2 transform -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#731A20] text-white rounded py-[2px] px-[5px] whitespace-nowrap"
        style={{ fontSize: '0.7em' }}
      >
        {label}
      </span>
    </div>
  );
}
