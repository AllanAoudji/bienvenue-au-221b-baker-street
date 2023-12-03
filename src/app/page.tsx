import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex items-center flex-col grow'>
      <div className='grow flex justify-between flex-col'>
        <div className='text-center aspect-square relative flex justify-center items-center text-5xl mt-32 mb-20'>
          <div>
            <h1 className='italic pb-4 font-light'>Bienvenue au</h1>
            <h1 className='font-bold italic'>221b Baker Street</h1>
          </div>
          <div className='inset-0 border-2 border-white absolute rounded-full m-24 opacity-50' />
        </div>
        <div className='text-center uppercase mb-16'>
          <Link href="/page/1" className='bg-white border-white border-2 text-black text-center py-4 px-8 rounded-md transition-all duration-300 hover:bg-transparent hover:text-white'>Commencer l&apos;aventure</Link>
        </div>
      </div>
    </main>
  )
}
