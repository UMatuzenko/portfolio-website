import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.webp";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import avatarPhoto from "@/assets/images/avatarPhoto.webp";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/*  orbitDuration?: string;
  spinDuration?: string;
  shouldSpin?: boolean;
  shouldOrbit?: boolean;*/}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-violet-400/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-[#8c45ff]/80" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-purple-400/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-violet-400/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-[#8c45ff]" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-purple-400/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-sky-400/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-purple-400/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s">
          <StarIcon className="size-28 text-[#8c45ff]" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={avatarPhoto}
            className="size-[100px]"
            alt="Profile picture of Julia"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-[#8c45ff] size-2.5 rounded-full relative">
              <div className="bg-[#8c45ff] absolute inset-0 rounded-full  animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto ">
          <h1 className="font-serif text-2xl md:text-4xl text-center mt-8 tracking-wide">
            I&apos;m Julia, a Front-end Developer with UX/UI Expertise
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          I built this portfolio using Next.js, Tailwind CSS, and CSS Animations to showcase my work, skills, and projects
          </p>
        </div>
        <div className="flex flex-col  md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <a href="mailto:umatuzenko@gmail.com" className="relative inline-flex items-center gap-2 bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] h-12 px-6 rounded-xl">
            <div className="absolute inset-0">
              <div className="absolute border border-white/15 rounded-xl inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="absolute rounded-xl border border-white/30 [mask-image:linear-gradient(to_top,black,transparent)] inset-0"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-xl"></div>
            </div>
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
