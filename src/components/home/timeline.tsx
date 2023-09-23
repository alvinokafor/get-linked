import React from "react";
import Container from "../partials/container";
import { Bar, SmallBar } from "../assets/bar";
import { timelineData } from "@/utils/data";

export default function Timeline() {
  return (
    <div className="mb-[109px] relative">
      <Container>
        <div className="text-center space-y-3 text-white font-body mt-[72px] mb-[91px]">
          <h1 className="font-heading font-bold text-[2rem]">Timeline</h1>
          <p className="text-xs lg:w-[30%] mx-auto">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="text-white flex items-end gap-x-24">
            <div className="w-[40%] space-y-3">
              <h1 className="text-2xl text-right text-primary font-bold">
                Hackathon Announcement
              </h1>
              <p className="text-right">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                1
              </div>
            </div>

            <h1 className="text-2xl text-primary font-bold">
              November 18, 2023
            </h1>
          </div>

          <div className="text-white flex pt-3 items-end gap-x-24">
            <h1 className="text-2xl text-right w-[40%] text-primary font-bold">
              November 18, 2023
            </h1>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                2
              </div>
            </div>

            <div className="w-[38%] space-y-3">
              <h1 className="text-2xl text-left text-primary font-bold">
                Team Registration begins
              </h1>
              <p className="text-left">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>

          <div className="text-white mt-3 flex items-end gap-x-24">
            <div className="w-[40%] space-y-3">
              <h1 className="text-2xl text-right text-primary font-bold">
                Team Registration ends
              </h1>
              <p className="text-right">
                Interested Participants are no longer Allowed to register
              </p>
            </div>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                3
              </div>
            </div>

            <h1 className="text-2xl text-primary font-bold">
              November 18, 2023
            </h1>
          </div>

          <div className="text-white flex pt-3 items-end gap-x-24">
            <h1 className="text-2xl text-right w-[40%] text-primary font-bold">
              November 18, 2023
            </h1>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                4
              </div>
            </div>

            <div className="w-[38%] space-y-3">
              <h1 className="text-2xl text-left text-primary font-bold">
                Announcement of the accepted teams and ideas
              </h1>
              <p className="text-left">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>

          <div className="text-white mt-3 flex items-end gap-x-24">
            <div className="w-[40%] space-y-3">
              <h1 className="text-2xl text-right text-primary font-bold">
                Getlinked Hackathon 1.0 Offically Begins
              </h1>
              <p className="text-right">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                5
              </div>
            </div>

            <h1 className="text-2xl text-primary font-bold">
              November 18, 2023
            </h1>
          </div>

          <div className="text-white flex pt-3 items-end gap-x-24">
            <h1 className="text-2xl text-right w-[40%] text-primary font-bold">
              November 18, 2023
            </h1>

            <div className="flex gap-y-3 flex-col items-center">
              <Bar />
              <div className="w-[53px] flex items-center justify-center font-bold text-2xl h-[53px] bg-timeline-gradient rounded-full">
                6
              </div>
            </div>

            <div className="w-[38%] space-y-3">
              <h1 className="text-2xl text-left text-primary font-bold">
                Demo Day
              </h1>
              <p className="text-left">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>

        <div className="text-white xl:hidden space-y-7">
          {timelineData.map((data) => (
            <div key={data.id} className="space-y-1">
              <div className="space-y-3 border-l-2 md:border-l-3 pl-5 relative left-2.5 md:left-5 border-primary">
                <h1 className="text-[12px] md:text-base text-primary font-bold">
                  {data.title}
                </h1>
                <p className="text-[12px] md:text-base">{data.body}</p>
              </div>

              <div className="flex items-center gap-x-3">
                <div className="w-[20px] md:w-[40px] md:h-[40px] flex items-center justify-center font-bold text-[12px] md:text-base h-[20px] bg-timeline-gradient rounded-full">
                  {data.id}
                </div>

                <h1 className="text-[12px] md:text-base self-end text-right text-primary font-bold">
                  {data.date}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </Container>

      <img
        className="absolute h-[16px] w-[14px] lg:h-auto lg:w-auto animate-pulse top-32 left-28 lg:top-40 lg:left-60"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute h-[12px] w-[10px] lg:h-auto lg:w-auto animate-pulse left-5 lg:left-32"
        src="./images/dim-star.png"
        alt=""
      />
      <img
        className="absolute h-[12px] w-[10px] lg:h-auto lg:w-auto animate-pulse right-24 lg:right-60 top-[550px] lg:top-[700px]"
        src="./images/hero-star.png"
        alt=""
      />
    </div>
  );
}
