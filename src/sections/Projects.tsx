import kuna from "@/assets/images/kuna.png";
import exness from "@/assets/images/Exness.png";
import rozetka from "@/assets/images/rozetka.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrorwUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Kuna",
    year: "Jun 2023 -",
    title: "Crypto Financial Platform",
    results: [
      { title: "Built analytics to track key metrics, driving data-based decisions and feature prioritization." },
      { title: "Increased user retention by 15% through UI/UX improvements." },
      { title: "Improved landing page performance with Next.js, cutting load times by 20%." },
    ],
    link: "https://kuna.io/en",
    image: kuna,
  },
  {
    company: "Exness",
    year: "2019 - 2022",
    title: "Financial Services",
    results: [
      { title: "Designed a series of A/B tests to enhance user onboarding and authorization, resulting in a 20% reduction in user drop-off rate." },
      { title: "Designed 4 different variations of registration flows for different markets according to regulations." },
      { title: "Migrated a sub-project from Sketch/Zeplin to Figma to enhance team collaboration and speed up feature delivery." },
    ],
    link: "https://www.exness.uk/",
    image: exness,
  },
  {
    company: "Rozetka",
    year: "2015 - 2018",
    title: "E-Commerce Platform",
    results: [
      { title: "Coded in HTML/SCSS and performed code reviews." },
      { title: "Improved checkout process to reduce shopping cart abandonment by 15%" },
      { title: "Created clickable prototypes to test user scenarios." },
    ],
    link: "https://rozetka.com.ua",
    image: rozetka,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#8c45ff] to-sky-400 text-center text-transparent bg-clip-text">
            Real-world Result
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Highlighted Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Explore how I turn concepts into engaging digital experiences.
        </p>
        <div className="mt-10 gap-20 md:mt-20 flex flex-col ">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  after:pointer-events-none px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="  bg-gradient-to-r from-[#8c45ff] to-sky-400 font-bold inline-flex gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site </span>
                      <ArrorwUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
