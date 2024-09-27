import { History, Bell, Settings, Plus } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <div className="bg-gray-100 h-14 flex items-center justify-between px-8 shadow-md">
      {/* Left Section: History and Search */}
      <div className='flex items-center gap-4'>
        {/* Recent Activities */}
        <div className="relative group">
          <button>
            <History className="w-6 h-6 hover:text-gray-500" />
          </button>
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
            Recent Activities
          </span>
        </div>

        {/* Search Input */}
        <SearchInput />
      </div>

      {/* Right Section: Plus, Bell, Settings, and Final Border */}
      <div className='flex items-center gap-6'>
        {/* Plus Icon */}
        <div className="relative group">
          <button className="text-white bg-[#800000] hover:bg-[#660000] focus:ring-4 focus:ring-red-300 rounded-lg p-2">
            <Plus className='w-4 h-4' />
          </button>
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
            Add New
          </span>
        </div>

        {/* Border between Plus and Bell */}
        <div className="h-6 border-r border-gray-300"></div> {/* Adjusted height */}

        {/* Bell Icon */}
        <div className="relative group">
          <button>
            <Bell className="w-6 h-6 hover:text-gray-500" />
          </button>
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
            Notifications
          </span>
        </div>

        {/* Settings Icon */}
        <div className="relative group">
          <button>
            <Settings className="w-6 h-6 hover:text-gray-500" />
          </button>
          <span className="absolute left-1/2 transform -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
            Settings
          </span>
        </div>

        {/* Final Border on the Right */}
        <div className="h-6 border-r border-gray-300"></div> {/* Final border on the right */}
      </div>
    </div>
  )
}
