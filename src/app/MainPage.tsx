"use client";
import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconCard } from "./_components/IconCard";

export const MainPage = () => {
  const handleOnClick = () => {
    document
      .getElementById("sign-up-input")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundImage: `url('/landing-page-background.png')`,
        }}
        className="flex flex-col items-center bg-blue-500 bg-gradient-to-t from-white via-black to-black py-48"
      >
        <div className="flex flex-col text-white items-center">
          <Text fontWeight="900" fontSize="6xl">
            Dotted
          </Text>
          <Text
            fontWeight="400"
            className="w-62 font-black text-center"
            fontSize="4xl"
          >
            Last minute plans for the busy traveler
          </Text>
          <div className="flex flex-col pt-12 space-y-4 items-center">
            <Button
              onClick={handleOnClick}
              rounded="full"
              h="14"
              w="48"
              letterSpacing={"wide"}
              fontWeight={"300"}
              className="flex w-48 bg-white text-black"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse xl:flex-row items-center xl:justify-center py-24 xl:space-x-24 px-4 sm:px-0">
        <Image
          className="leading-none"
          alt="dotted-map"
          src="/travel-like-a-pro.svg"
          width="700"
          height="700"
        />
        <div className="flex flex-col items-center justify-center">
          <Text
            className="text-indigo-700 text-center text-2xl sm:text-6xl"
            fontWeight="900"
          >
            Travel Like A Pro
          </Text>
          <Text
            fontWeight="300"
            className="text-black sm:text-lg sm:w-96 text-center"
          >
            Get personalized AI-generated itineraries for your travel dates in
            seconds so you can spend less time planning and more time going.
          </Text>
        </div>
      </div>
      <div
        className="flex flex-col pb-24"
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundImage: `url('/purp-bg.png')`,
        }}
      >
        <div className="flex flex-col xl:flex-row xl:justify-center items-center w-full space-y-12 xl:space-y-0 xl:space-x-40">
          <IconCard
            icon="ai-icon.svg"
            title="Tailored For you"
            description="Set your travel preferences and get a personalized travel experience"
          />
          <IconCard
            icon="bell-icon.svg"
            title="AI Generated"
            description="Our AI will build you an itinerary where yo ucan further customize to your liking"
          />
          <IconCard
            icon="person-icon.svg"
            title="Time Management"
            description="Get notifications on upcoming activties or extend your current activity with a button"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 mt-32">
          <Text
            fontWeight={800}
            className="text-white uppercase tracking-wide text-center text-4xl sm:text-6xl"
          >
            Join the wait list!
          </Text>
          <Text
            fontWeight={"200"}
            className="sm:text-2xl text-white max-w-96 sm:max-w-[576px] text-center"
          >
            Are you excited for the next evolution in travel agencies? Join now
            and be notified on product updates and news.
          </Text>
          <InputGroup
            rounded="full"
            height="70px"
            display="flex"
            className="!w-4/5 sm:!w-[560px]"
          >
            <Input
              id="sign-up-input"
              variant="unstyled"
              rounded="full"
              colorScheme="purple"
              fontSize={"2xl"}
              placeholder="Enter email..."
              textColor={"white"}
              letterSpacing={"wide"}
              fontWeight={"200"}
              px="8"
              className=" !placeholder-white border-2 focus:border-indigo-700 border-indigo-500"
            />
            <InputRightElement
              width="60px"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mr="8"
              className="cursor-pointer"
            >
              <Image
                color="white"
                className="text-white fill-current"
                width="40"
                height="40"
                alt="input-icon"
                src="/icons/paper-plane-icon.svg"
              />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
