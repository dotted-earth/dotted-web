import Image from "next/image";
import React from "react";

type IconCardProps = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export const IconCard = ({
  title,
  description,
  icon,
  iconAlt,
}: IconCardProps) => {
  return (
    <div className="flex-grow bg-white sm:h-[300px] p-8 border-solid border-2 border-indigo-700 shadow-md shadow-indigo-700 rounded-lg xl:p-10">
      <Image
        className="w-32 h-32 mx-auto xl:mx-0 xl:w-20 xl:h-20 self-center xl:self-start"
        height={32}
        width={32}
        alt={iconAlt}
        src={icon}
        loading="lazy"
      />
      <div className="flex flex-col space-y-1 xl:space-y-8 pt-4 self-center items-center xl:items-start">
        <h3 className="text-indigo-700 font-medium text-2xl">{title}</h3>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};
