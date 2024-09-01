import React from "react";
import "./about.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  return (
    <div className="mt-20  mb-24" id="about">
      <div>
        <div className="about  cursor-pointer">About</div>
        <h3 className="about-h3">
          Hello! I'm Umidjon G'afforov MERN Stack Developer from Uzbekistan
        </h3>
        <p className="about-p">
          Hi, I'm G'afforov Umidjon, a Full stack developer with a focus on
          Next.js/React development. I love creating web applications that solve
          everyday problems, and I'm always curious to learn more when it comes
          to new technologies and creative coding.
        </p>
      </div>{" "}
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="sm:w-[500px] w-full  "
      >
        <CarouselContent className="-mt-1 h-[300px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/1">
              <div className="p-1 h-full ">
                <Card className="h-full">
                  <CardContent className="flex  h-full items-center justify-center p-6">
                    {index + 1}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default About;
