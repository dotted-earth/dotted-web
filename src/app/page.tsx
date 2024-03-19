import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./_components/MainPage";

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex flex-col min-h-screen">
        <MainPage />
      </main>
    </ChakraProvider>
  );
}
