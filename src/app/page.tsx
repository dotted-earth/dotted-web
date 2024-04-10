"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { MainPage } from "./MainPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main className="flex flex-col min-h-screen">
          <MainPage />
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
