import { StaticImageData } from "next/image";
import { links, experiencesData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type Experience = (typeof experiencesData)[number]
export type ErrorResponse = {
  statusCode: number,
  message: string,
  name: string,
}
export type EmailResponse = {
  id: string
}
export type TProjects = {
  title: string,
  description: string,
  tags: string[],
  imageUrl: StaticImageData,
  site?: string,
  github?: string,
}
