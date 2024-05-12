import React from "react";
import Image from "next/image";
import Banner from "../../assests/Banner0.jpg";

export const Header = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <Image
        src={Banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center bg-gray-100 bg-opacity-50 rounded-lg mx-4 sm:mx-0">
          <h1 className="pt-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Handmade Products
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Exquisite Carpets, luxurious Silk Chain Stitch Rugs, and elegant
            Pashmina Stoles.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
