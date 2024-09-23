import smashing from "@/assets/images/freiburg-2023.webp";
import bradFrost from "@/assets/images/brad-frost-workshop.webp";
import smashing2024 from "@/assets/images/smashing-2024.webp";
import { SectionHeader } from "@/components/SectionHeader";
import pushUx from "@/assets/images/push-ux-2023-2.webp";
import antwerp from "@/assets/images/antwerp-2023.webp";
import ryanTownsend from "@/assets/images/ryanTownsend.webp";
import Image from "next/image";
import { Card } from "@/components/Card";

import { Fragment } from "react";

const events = [
  {
    title: "SmashingConf - Freiburg 2023",
    description: "The Web",
    photo: smashing,
  },
  {
    title: "SmashingConf - Antwerp 2023",
    description: "Design & UX",
    photo: antwerp,
  },
  {
    title: "Workshop - by Brad Frost",
    description: "Design Systems",
    photo: bradFrost,
  },
  {
    title: "PUSH UX - Munich 2023",
    description: "Design & UX",
    photo: pushUx,
  },
  {
    title: "SmashingConf - Freiburg 2024",
    description: "The Web",
    photo: smashing2024,
  },
  {
    title: "Workshop - by Ryan Townsend",
    description: "Web Performance",
    photo: ryanTownsend,
  },
];

export const EventSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Experiences That Inspire Me"
          title="Inspiration Through Action"
          description="  Here, I share the moments that have left a lasting impression on both my career and personal development."
        />
        <div className="flex mt-12 lg:mt-20  overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 items-start flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {events.map((events) => (
                  <Card
                    key={events.title}
                    className="flex max-w-xs md:max-w-md p-6 md:p-8 mb-0 hover:-rotate-3 transition duration-300"
                  >
                    <div>
                      <div>
                        <div className="font-serif text-xl md:text-2xl mt-2 md:mt-4">
                          {events.title}
                        </div>
                        <p className="font-semibold mt-2 md:mt-4 text-sm md:text-base text-white/50">
                          {events.description}
                        </p>
                        <Image
                          src={events.photo}
                          alt={events.title}
                          className=" mt-4 block w-full h-auto"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

