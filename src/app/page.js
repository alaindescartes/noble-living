import Carousel from "@/components/Carousel";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero image */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      <div className="flex flex-col p-6 bg-primary-content text-white lg:w-full lg:px-20 lg:py-10">
        {/* Service Titles Section */}
        <div className="flex flex-col gap-2 bg-neutral rounded-lg p-6 shadow-md lg:flex-row lg:justify-around">
          <p className="text-center text-lg lg:text-2xl font-semibold tracking-wide">
            PROPERTY
          </p>
          <p className="text-center text-lg lg:text-2xl font-semibold tracking-wide">
            CONCIERGE
          </p>
          <p className="text-center text-lg lg:text-2xl font-semibold tracking-wide">
            MANAGEMENT
          </p>
        </div>

        {/* Main Title */}
        <h1 className="shine-text text-center text-3xl lg:text-5xl mt-6 mb-6">
          NOBLE LIVING
        </h1>

        {/* Business Hours Section */}
        <div className="flex flex-col gap-2 bg-neutral rounded-lg p-6 shadow-md lg:flex-row lg:justify-around">
          <p className="text-center text-lg lg:text-2xl font-medium">
            Monday - Friday
          </p>
          <p className="text-center text-lg lg:text-2xl font-medium">
            8:30 AM - 5:00 PM
          </p>
        </div>
      </div>
      {/* complimentary image */}
      <div className="relative">
        {/* Image */}
        <img
          src="/relax.jpg"
          alt="image of people relaxing"
          className="w-full h-[600px] object-cover"
        />

        {/* Text over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            PROPERTY SERVICES
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-lg">
            Sit back and relax. Let us take care of all your property management
            needs
          </p>
        </div>
      </div>
      {/* carousel of images */}
      <div className="flex flex-col gap-5 pt-8 bg-primary-content">
        <h1 className="text-center font-semibold">PHOTO GALLERY</h1>
        <Carousel />
      </div>
    </div>
  );
}
