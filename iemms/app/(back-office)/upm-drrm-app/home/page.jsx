import HomeNavBar from '@/components/dashboard/HomeNavBar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className=''>
      <HomeNavBar />
      {children}
    </div>
  );
}
