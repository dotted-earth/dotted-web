"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { postEmailSignup } from "./_api/emailMutations";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { IconCard } from "@/components/ui/IconCard";
import { Plane, Bot, Clock, Shapes } from "lucide-react";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email" })
    .email("Invalid email")
    .default(""),
});
type EmailSchema = z.infer<typeof emailSchema>;

import airplaneBg from "@assets/images/hero_img.png";
import purpleBg from "@assets/images/purp-bg.png";
import travelLikeAProSvg from "@assets/images/travel-like-a-pro.svg";
import { sleep } from "@/lib/sleep";

export const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
  });
  const { ref: emailRegisterRef, ...emailRegister } = register("email");
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: postEmailSignup,
    onError: (error) => {
      toast(error.message);
    },
    onSuccess: (data) => {
      if (data.error) {
        if (data.error?.code === "23505") {
          toast.error("Email is already registered.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
        return;
      }
      toast.success("You have been registered!");
      reset();
    },
  });

  const onSubmit: SubmitHandler<EmailSchema> = async (data) => {
    mutate({
      email: data.email,
    });
  };

  return (
    <>
      <section className="relative min-h-[calc(100dvh_-_20dvh)] flex flex-col items-center justify-center overflow-clip">
        <Image
          src={airplaneBg}
          alt="a woman smiling with a backpack"
          className="absolute object-cover object-top md:object-right-top h-full w-full top-0 left-0 -z-10"
          priority
          loading="eager"
        />

        <div className="absolute h-full w-full bg-gradient-to-t from-white from-10% via-white/20 via-30% -z-10"></div>

        <div className="container flex flex-col gap-10 text-white items-center z-10">
          <p className="font-marcellus text-6xl tracking-wide text-white">
            Dotted
          </p>
          <h1 className="text-center text-2xl sm:text-4xl text-white">
            Last minute plans for the busy traveler
          </h1>
          <button
            onClick={async () => {
              if (emailInputRef.current) {
                emailInputRef.current.scrollIntoView({ behavior: "smooth" });
                await sleep(500);
                emailInputRef.current.focus();
              }
            }}
            className="rounded-full font-marcellus tracking-wide text-white bg-gradient-to-tr from-purple-300 to-indigo-800
              text-2xl text-center py-2 px-10 drop-shadow-md"
          >
            Join Wait List
          </button>
        </div>
      </section>
      <section className="mb-20 flex flex-col-reverse gap-10 xl:flex-row items-center xl:justify-center xl:space-x-24 px-4 sm:px-0">
        <Image
          alt="a map showing point-to-point destinations"
          src={travelLikeAProSvg}
          width="700"
          height="700"
          loading="lazy"
        />
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-center text-indigo-600 tracking-wide text-4xl sm:text-6xl font-marcellus">
            Travel Like A Pro
          </h2>
          <p className="font-light sm:text-lg sm:w-96 text-center">
            Get personalized AI-generated itineraries for your travel dates in
            seconds so you can spend less time planning and more time going.
          </p>
        </div>
      </section>
      <section className="relative pb-20">
        <Image
          src={purpleBg}
          alt=""
          aria-hidden="true"
          aria-roledescription="presentation"
          role="presentation"
          className="absolute h-full w-full top-0 left-0 -z-10"
          loading="lazy"
        />

        <div className="container mx-auto space-y-20">
          <div className="mx-4 flex flex-col items-center gap-12 xl:mx-0 xl:gap-20 xl:flex-row xl:justify-center">
            <IconCard
              icon={Shapes}
              iconAlt="shapes of triangle, square, and circle icon"
              title="Tailored For you"
              description="Set your travel preferences and get a personalized travel experience"
            />
            <IconCard
              icon={Bot}
              iconAlt="a robot icon"
              title="AI Generated"
              description="Our AI will build you an itinerary where you can further customize to your liking"
            />
            <IconCard
              icon={Clock}
              iconAlt="a clock icon"
              title="Time Management"
              description="Get notifications on upcoming activities or extend your current activity with a button"
            />
          </div>

          <div className="space-y-10 text-center">
            <h2 className="uppercase text-center text-indigo-600 tracking-wide text-4xl sm:text-6xl font-marcellus">
              Join the wait list!
            </h2>
            <p className="text-white text-center text-2xl max-w-xl mx-auto">
              Are you excited for the next evolution in travel agencies? Join
              now and be notified on product updates and news.
            </p>
            <form
              className="max-w-sm mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset className="space-y-2">
                <div className="relative">
                  <input
                    {...emailRegister}
                    ref={(el) => {
                      emailRegisterRef(el);
                      emailInputRef.current = el;
                    }}
                    type="text"
                    className="w-full bg-transparent border-none outline-none text-white text-xl rounded-full placeholder:text-white caret-white px-8 py-3 ring-2 ring-indigo-500 focus:ring-indigo-800"
                    placeholder="Enter email..."
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 -translate-y-1/2 right-8"
                    disabled={isPending}
                  >
                    <Plane
                      className={`text-white hover:animate-bounce ${
                        isPending ? "text-neutral-400" : ""
                      }`}
                      size={32}
                      aria-label="Submit"
                    />
                  </button>
                </div>
                {errors?.email && (
                  <div className="bg-rose-500 text-white mx-3 px-3 py-2 rounded-md text-sm font-semibold">
                    {errors.email.message}
                  </div>
                )}
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
