import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type IconCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconAlt: string;
};

export const IconCard = ({
  title,
  description,
  icon: Icon,
  iconAlt,
}: IconCardProps) => {
  return (
    <div className="flex-grow bg-white sm:h-[300px] p-8 border-solid border-2 border-indigo-700/50 shadow-md shadow-indigo-700 rounded-lg xl:p-10 w-full">
      <div className="p-4 w-fit rounded-lg bg-gradient-to-tr from-indigo-300 to-rose-600 mx-auto xl:mx-0">
        <Icon className="text-white" aria-label={iconAlt} size={80} />
      </div>
      <div className="flex flex-col space-y-1 xl:space-y-8 pt-4 self-center items-center xl:items-start">
        <h3 className="text-indigo-700 font-medium text-2xl">{title}</h3>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};
