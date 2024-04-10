"use client";
import React, { useRef, useState } from "react";
import { Marcellus_SC } from "next/font/google";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Image from "next/image";
import { IconCard } from "./_components/IconCard";
import { postEmailSignup } from "./_api/emailMutations";
import { useMutation } from "@tanstack/react-query";

const marcellusSC = Marcellus_SC({ weight: "400", subsets: ["latin"] });

export const MainPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleOnClick = () => {
    document
      .getElementById("sign-up-input")
      ?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.getElementById("sign-up-input")?.focus();
    }, 500);
  };

  const { data, mutate } = useMutation({
    mutationFn: postEmailSignup,
  });

  const mutationError = data?.error;

  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.FormEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isFormValid = formRef?.current?.checkValidity?.() ?? true;
    setIsEmailValid(isFormValid);
    if (!isFormValid) return;
    mutate({ email });
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
          <Text
            className={marcellusSC.className}
            fontWeight="900"
            fontSize="6xl"
          >
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
            className={`text-indigo-700 text-center text-2xl sm:text-6xl ${marcellusSC.className}`}
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
            className={`text-white uppercase tracking-wide text-center text-4xl sm:text-6xl ${marcellusSC.className}`}
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
          <form noValidate ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <FormControl
              isInvalid={!!mutationError || isEmailValid}
              className="sm:!w-[560px]"
            >
              <InputGroup rounded="full" height="70px" display="flex">
                <Input
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  type="email"
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
                  pr="24"
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
                  onClick={(e) => handleSubmit(e)}
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
              {mutationError && isEmailValid && (
                <FormErrorMessage
                  background={"tomato"}
                  color={"white"}
                  p={2}
                  mx={5}
                  rounded="lg"
                  fontSize={"sm"}
                  fontWeight={400}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  {mutationError?.code === "23505"
                    ? "Your email already exists."
                    : "Something went wrong. Please try again later."}
                </FormErrorMessage>
              )}
              {!isEmailValid && (
                <FormHelperText
                  background={"silver"}
                  color={"white"}
                  p={2}
                  mx={5}
                  rounded="lg"
                  fontSize={"sm"}
                  fontWeight={400}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  Email is invalid. Please re-enter
                </FormHelperText>
              )}
              {data && data.status === 201 && (
                <FormHelperText
                  background={"seagreen"}
                  color={"white"}
                  p={2}
                  mx={5}
                  rounded="lg"
                  fontSize={"sm"}
                  fontWeight={400}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  {"You have been registered!"}
                </FormHelperText>
              )}
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};
