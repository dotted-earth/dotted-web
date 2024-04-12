import { Toaster as Sonner } from "@/components/ui/sonner";
import { AlertTriangle, PartyPopper } from "lucide-react";

export function Toaster() {
  return (
    <Sonner
      theme="light"
      toastOptions={{
        className: "text-xl space-x-10",
      }}
      icons={{
        error: <AlertTriangle className="text-rose-400" size={32} />,
        success: <PartyPopper className="text-emerald-400" size={32} />,
      }}
    />
  );
}
