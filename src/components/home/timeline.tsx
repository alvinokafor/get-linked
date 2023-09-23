import React from "react";
import Container from "../partials/container";
import { Bar } from "../assets/bar";
import { timelineData } from "@/utils/data";
import AnimateY from "../partials/animate-y";

export default function Timeline() {
  return (
    <div className="relative mb-[109px]" id="timeline">
      <Container>
        <div className="mb-[91px] mt-[72px] space-y-3 text-center font-body text-white">
          <h1 className="font-heading text-[2rem] font-bold">Timeline</h1>
          <p className="mx-auto text-xs lg:w-[30%]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="hidden xl:block">
          <AnimateY staggerAmount={0.25}>
            <div className="flex items-end gap-x-24 text-white">
              <div className="w-[40%] space-y-3">
                <h1 className="text-right text-2xl font-bold text-primary">
                  Hackathon Announcement
                </h1>
                <p className="text-right">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  1
                </div>
              </div>
              <h1 className="text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
            </div>
          </AnimateY>

          <AnimateY staggerAmount={0.35}>
            <div className="flex items-end gap-x-24 pt-3 text-white">
              <h1 className="w-[40%] text-right text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="w-[38%] space-y-3">
                <h1 className="text-left text-2xl font-bold text-primary">
                  Team Registration begins
                </h1>
                <p className="text-left">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
          </AnimateY>

          <AnimateY staggerAmount={0.45}>
            <div className="mt-3 flex items-end gap-x-24 text-white">
              <div className="w-[40%] space-y-3">
                <h1 className="text-right text-2xl font-bold text-primary">
                  Team Registration ends
                </h1>
                <p className="text-right">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  3
                </div>
              </div>
              <h1 className="text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
            </div>
          </AnimateY>

          <AnimateY staggerAmount={0.55}>
            <div className="flex items-end gap-x-24 pt-3 text-white">
              <h1 className="w-[40%] text-right text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="w-[38%] space-y-3">
                <h1 className="text-left text-2xl font-bold text-primary">
                  Announcement of the accepted teams and ideas
                </h1>
                <p className="text-left">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
          </AnimateY>

          <AnimateY staggerAmount={0.65}>
            <div className="mt-3 flex items-end gap-x-24 text-white">
              <div className="w-[40%] space-y-3">
                <h1 className="text-right text-2xl font-bold text-primary">
                  Getlinked Hackathon 1.0 Offically Begins
                </h1>
                <p className="text-right">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  5
                </div>
              </div>
              <h1 className="text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
            </div>
          </AnimateY>

          <AnimateY staggerAmount={0.75}>
            <div className="flex items-end gap-x-24 pt-3 text-white">
              <h1 className="w-[40%] text-right text-2xl font-bold text-primary">
                November 18, 2023
              </h1>
              <div className="flex flex-col items-center gap-y-3">
                <Bar />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-timeline-gradient text-2xl font-bold">
                  6
                </div>
              </div>
              <div className="w-[38%] space-y-3">
                <h1 className="text-left text-2xl font-bold text-primary">
                  Demo Day
                </h1>
                <p className="text-left">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
          </AnimateY>
        </div>

        <div className="space-y-7 text-white xl:hidden">
          {timelineData.map((data) => (
            <div key={data.id} className="space-y-1">
              <div className="md:border-l-3 relative left-2.5 space-y-3 border-l-2 border-primary pl-5 md:left-5">
                <h1 className="text-[12px] font-bold text-primary md:text-base">
                  {data.title}
                </h1>
                <p className="text-[12px] md:text-base">{data.body}</p>
              </div>

              <div className="flex items-center gap-x-3">
                <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-timeline-gradient text-[12px] font-bold md:h-[40px] md:w-[40px] md:text-base">
                  {data.id}
                </div>

                <h1 className="self-end text-right text-[12px] font-bold text-primary md:text-base">
                  {data.date}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </Container>

      <img
        className="absolute left-28 top-32 h-[16px] w-[14px] animate-pulse lg:left-60 lg:top-40 lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute left-5 h-[12px] w-[10px] animate-pulse lg:left-32 lg:h-auto lg:w-auto"
        src="./images/dim-star.png"
        alt=""
      />
      <img
        className="absolute right-24 top-[550px] h-[12px] w-[10px] animate-pulse lg:right-60 lg:top-[700px] lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
    </div>
  );
}
