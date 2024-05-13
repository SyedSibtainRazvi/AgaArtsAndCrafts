import Image from "next/image";
import testiminionialImage1 from "../../assests/Testimonial1.jpg";

export const Testimonial = () => {
  return (
    <div className="bg-white mx-8 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0 rounded-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-40 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-square">
              <Image
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={testiminionialImage1}
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  Sami shop in Chiang Mai is a hidden gem! As soon as I walked
                  in, I was impressed by the special items and Samis genuine
                  love for what he does.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
