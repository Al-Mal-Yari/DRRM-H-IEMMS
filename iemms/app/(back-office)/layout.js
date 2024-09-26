import React from 'react'
import Header from '@/components/dashboard/Header'

export default function Layout({children}) {
  return (
    <div 
    className="flex">
    <div className="w-56 min-h-screen bg-red-900 text-slate-50">
      sidebar</div>

    <main className="w-full bg-slate-100 min-h-screen">
    <Header></Header>  
      {children}</main>
    </div>
  )
}
