import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type IconCardProps = {
  title: string;
  description: string;
  icon: string;
};

export const IconCard = ({ title, description, icon }: IconCardProps) => {
  return (
    <div className="bg-white w-3/5 xl:w-60 sm:h-[300px] p-4 border-solid border-2 border-indigo-700 shadow-md shadow-indigo-700 rounded-lg">
      <Image
        className="w-32 h-32 xl:!w-20 xl:!h-20"
        width="80"
        height="80"
        alt="card-icon"
        src={`/icons/${icon}`}
      />
      <div className="flex flex-col space-y-1 sm:space-y-8 pt-4">
        <Text className="text-indigo-700" fontWeight={"500"} fontSize="lg">
          {title}
        </Text>
        <Text fontWeight={300}>{description}</Text>
      </div>
    </div>
  );
};
