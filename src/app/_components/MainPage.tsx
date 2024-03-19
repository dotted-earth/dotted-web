import React from "react";
import { Button, Text } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundImage: `url('/landing-page-background.png')`,
        }}
        className="flex flex-col items-center bg-blue-500 bg-gradient-to-t from-white via-black to-black py-24"
      >
        <div className="flex flex-col text-white items-center">
          <Text fontWeight="900" fontSize="6xl">
            Dotted
          </Text>
          <Text fontWeight="200" className="w-62" fontSize="4xl">
            Last minute plans for the busy traveler
          </Text>
          <div className="flex flex-col pt-12 space-y-4 items-center">
            <Text
              fontWeight="300"
              fontSize="lg"
              className="text-black w-96 text-center"
            >
              Get personalized AI-generated itineraries for your travel dates in
              seconds so you can spend less time planning and more time going.
            </Text>
            <Button
              rounded="full"
              height="14"
              className="flex w-48 bg-white text-black"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
