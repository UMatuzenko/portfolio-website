import kuna from "@/assets/images/kuna.webp";
import exness from "@/assets/images/exness.webp";
import rozetka from "@/assets/images/rozetka.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Kuna",
    year: "2021 - Present",
    title: "Fintech",
    results: [
      {
        title:
          "Migrated analytics from Google to Amplitude and improved the details of existing tracking events;",
      },
      { title: "Enhanced the Design System for various platforms to ensure accessibility and include digital assistance features;" },
      {
        title:
          "Contributed to landing page optimization through redesign and Next.js, reducing load times by up to 20% and improving core metrics;",
      },
      {
        title:
          "Increased UI testing coverage and scenarios using Cypress and Playwright;",
      },
    ],
    link: "https://kuna.io/en",
    image: kuna,
  },
  {
    company: "Exness",
    year: "2019 - 2021",
    title: "Financial Services",
    results: [
      {
        title:
          "Designed a series of A/B tests to enhance user onboarding and authorization, resulting in a 20% reduction in user drop-off rate.",
      },
      {
        title:
          "Designed 4 different variations of registration flows for different markets according to regulations.",
      },
      {
        title:
          "Migrated a sub-project from Sketch/Zeplin to Figma to enhance team collaboration and speed up feature delivery.",
      },
    ],
    link: "https://www.exness.uk/",
    image: exness,
  },
  {
    company: "Rozetka",
    year: "2015 - 2017",
    title: "E-Commerce Platform",
    results: [
      { title: "Aligned design for the mobile apps according to the main company’s web platform;" },
      {
        title:
          "Redesigned existing Android app from an iOS-like design to Google’s Material Design;",
      },
      { title: "Improved checkout process user journey to reduce shopping cart abandonment rates by 15%;" },
    ],
    link: "https://rozetka.com.ua",
    image: rozetka,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Result"
          title=" Highlighted Projects"
          description="Explore how I turn concepts into engaging digital experiences."
        />
        <div className="mt-10 gap-20 md:mt-20 flex flex-col ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-[#8c45ff] to-sky-400 font-bold inline-flex gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
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
                        <CheckCircleIcon className="flex-none size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site </span>
                      <ArrowUpRightIcon className="size-4" />
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
