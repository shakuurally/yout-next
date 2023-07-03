"use client";
import { store } from "@/store";
import Banner from "../../public/shopping.png";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-white container h-screen pt-24  mx-auto">
        <div className="flex continer p-8 mx-auto flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w2xl mb-8">
              <h1
                className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl 
            lg:leading-tight xl:text-6xl
            "
              >
                Hello buy or sell something{" "}
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
                online shopping, digital downloads, online subscriptions, and
                online ticketing. It has revolutionized the way people do
                business and has become an increasingly popular way to shop due
                to its convenience and accessibility..
              </p>
              {/* button */}
              <div>
                <Link
                  href="products"
                  className="px-8 w-52 text-white bg-indigo-600  rounded-md py-4"
                >
                  products
                </Link>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex items-center w-full lg:w-1/2">
            <div>
              <Image src={Banner} alt="image" width="600" height="800" />
            </div>
          </div>
        </div>
      </main>
    </Provider>
  );
}
