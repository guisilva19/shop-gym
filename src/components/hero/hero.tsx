import Image from "next/image";
import gym from "@/assets/gym.jpeg";
import { TextGenerateEffect } from "../ui/text-generate";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <main className="w-screen h-screen bg-black flex flex-col items-center justify-center">
        <section className="z-20 flex flex-col items-center justify-center w-max">
          <TextGenerateEffect words="BUILD YOUR GYM" classNameText="text-4xl md:text-6xl" />
          <TextGenerateEffect
            words="The gym hummed with activity, bodies moving with purpose."
            classNameText="text-[12px] md:text-base font-light"
            className="opacity-50 flex-wrap w-10/12 text-center leading-[5px]"
          />
          <div className="flex mt-10 gap-5">
            <button className="px-5 md:px-10 md:py-4 py-3 rounded-full bg-white font-bold flex items-center gap-2 text-sm md:text-lg hover:animate-jump animate-once animate-duration-500">
              <MdOutlineShoppingCart size={25} />
              Shop Now
            </button>
            <button className="px-5 md:px-10 md:py-4 -py-1 rounded-full border bg-transparent font-semibold flex items-center gap-2 text-sm md:text-lg text-white hover:animate-jump animate-once animate-duration-500">
              Explore More
            </button>
          </div>
        </section>

        <div className="absolute inset-0 z-10 bg-black/60" />
        <Image
          src={gym}
          alt="GYM"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=""
        />
        <div className="absolute bottom-10 text-white flex flex-col items-center animate animate-bounce animate-infinite">
          <p className="animate-fade">SCROLL DOWN</p>
          <FaAngleDown size={25} className="animate-fade" />
        </div>
      </main>
    </>
  );
}
