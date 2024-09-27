import React from 'react'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'

export default function Layout({children}) {
  return (
    <div 
    className="flex">
    <div className="w-56 min-h-screen bg-red-900 text-slate-50">
     <Sidebar></Sidebar>
      </div>

    <main className="w-full bg-slate-100 min-h-screen">
    <Header></Header>  
      {children}</main>
    </div>
  )
}
