"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { TimelineElement } from "./timeline-element";

export default function Experience() {
  const { ref } = useSectionInView("Experiência");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiência</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (<TimelineElement item={item} key={index} />)
        })}
      </VerticalTimeline>
    </section>
  );
}
