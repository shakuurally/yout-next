import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getProducts(){
  const res = await fetch("http://localhost:3000/api/users")
  if(!res.ok){
    throw new Error("failed to fetch")
  }
  return res.json()
}

async function pages() {
  const data =  await getProducts()
  return (
    <main>
      <div className='bg-white py12 text-black sm:py-16 lg:py-20'
      >
        <div className='mx-auto pt-16 max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-md textcenter'>
            <h1 className='font-serif text-3xl max-wmd text-center font-bold sm:text-3xl'>All products</h1>
          </div>
          {/* products */}
          <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:my-16'>
            {data.map(products =>(
              <div key={products.id} className='relative glex flex-col  overflow-hidden rounded-lg border'>
               <div className='aspect-square overflow-hidden'>
                <Image src={products.image} alt='' width={100} height={100} className='h-full w-full object-fill'/>
               </div>
               {/*  */}
               <div className='absolute top-0 m-2 bg-white  rounded-full '>
                <p className='rounded-full bg-emerald-500 p-1 text-[9px] font-bold uppercase  tracking-wide text-white sm:py-1 sn:px-3'>sale</p>
               </div>
               <div className='my-4 mx-auto flex w-10/12 flex-col items-start justify-between'>
                <div className='mb-2 flex'>
                  <p className='mr-3 text-sm  text-gray-500'>${products.price}</p>
                </div>
                <h3 className='mb-2 text-sm font-semibold'>{products.title}</h3>
               </div>
               <button className='mb-2 flex h-14 px-3 w-full items-stretch overflow-hidden rounded-md text-gray-500'>
                <div className='flex w-full items-center mb-2 bg-emerald-500  text-white text-center justify-center'>
                  <Link href={`/products/${products.id.toString()}`} >Details</Link>
                </div>
               </button>
              </div>
            ))}
          </div>


        </div>
      </div>
    </main>
  )
}

export default pages
