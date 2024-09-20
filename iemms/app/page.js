import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col'>
      <h2 className='text-3xl mb-4'>DRRM-H INVENTORY-EQUIPMENT MONITORING AND MANAGEMENT SYSTEM</h2>

    
       <Link href="/inventory/home/overview" className="">View Dashboard</Link>
    </div>


  );
}
