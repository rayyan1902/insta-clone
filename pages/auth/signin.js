import React from 'react'
import {getProviders, signIn } from 'next-auth/react';
import Header from '@/components/Header';
import { useRouter } from 'next/router';

//browser
function signin({providers}) {
    const router = useRouter();
  return (
       <>
           <Header />
        
        <div className='flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center'>
        <img onClick={() => router.push("/")} className='w-80 cursor-pointer' src='https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016-700x199.png' />
        <p className='font-xs italic'>This is not a REAL app, it is built for educational purposes only</p>
        <div className='mt-40'>
       {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id,  {callbackUrl: "/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
       </div>
        </div>
      
     
    </>
  )
}


//server
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
};

export default signin;
