import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getSingleProduct({ params }) {
  console.log(params);
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  return res.json();
}

async function page({ params }) {
  const data = await getSingleProduct({ params });
  console.log(data);
  return (
    <div className="h-full bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
      {data && (
        <div className="w-full flex max-w-6xl rounded shadow-2xl bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center px-10 mb-10 pt-32 w-full md:w/1/2">
            <div className="relative">
              <Image src={data.image} width={500} height={500} className="w-full relative z-10" />
              <div className="border border-yellow-200  absolute top-10 bottom-10 right-10 lef-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10  ">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5 ">{data.title}</h1>
              <p className="text-sm text-gray-500 ">{data.description}</p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">{data.price}</span>
                <span className="text-3xl leading-none align-baseline">.99</span>
              </div>
            </div>
            <button className="mb-14 mt-10 flex h-14 px-3 w-full items-stretch overflow-hidden rounded-md text-gray-500">
              <div className="flex w-full items-center mb-2 bg-emerald-500  text-white text-center justify-center">
                <Link href={`/products`}>Details</Link>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
