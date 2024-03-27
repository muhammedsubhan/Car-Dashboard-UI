import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Image from "next/image";
const ServicesTimeLine = () => {
  return (
    <>
      <div className="py-5 px-3">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <div className="w-[50px]  h-[50px] bg-green-100 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/center.png"
                  alt="icon-image"
                  width={20}
                  height={20}
                />
              </div>
              <TimelineConnector className="bg-green-400 w-[3px] rounded-md h-[50px] mt-3" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-semibold  text-gray-600">
                  Center Care
                </h1>
                <div className="flex items-center gap-5">
                  <p className="text-base font-semibold text-black">
                    Price : $78
                  </p>
                  <span className="border-l h-5 border-gray-300 border"></span>
                  <p className="text-base font-semibold text-gray-400">
                    Processing : 1 hours
                  </p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mt-2">
            <TimelineSeparator>
              <div className="w-[50px]  h-[50px] bg-purple-100 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/diagnostics.png"
                  alt="icon-image"
                  width={25}
                  height={25}
                />
              </div>
              <TimelineConnector className="bg-purple-400 w-[3px] rounded-md h-[50px] mt-3" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-semibold  text-gray-600">
                  Diagnostics
                </h1>
                <div className="flex items-center gap-5">
                  <p className="text-base font-semibold text-black">
                    Price : $48
                  </p>
                  <span className="border-l h-5 border-gray-300 border"></span>
                  <p className="text-base font-semibold text-gray-400">
                    Processing : 2 hours
                  </p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mt-2">
            <TimelineSeparator>
              <div className="w-[50px]  h-[50px] bg-red-100 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/cleaning.png"
                  alt="icon-image"
                  width={30}
                  height={30}
                />
              </div>
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-semibold text-gray-600">
                  Inner Cleaning
                </h1>
                <div className="flex items-center gap-5">
                  <p className="text-base font-semibold text-black">
                    Price : $78
                  </p>
                  <span className="border-l h-5 border-gray-300 border"></span>
                  <p className="text-base font-semibold text-gray-400">
                    Processing : 2 hours
                  </p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default ServicesTimeLine;
