import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on home page
  if (location.pathname === "/") return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => navigate(-1)}
      className="fixed top-[4.5rem] md:top-24 left-2 md:left-4 z-40 glass-card hover:bg-white/90 text-xs md:text-sm px-2 md:px-3"
    >
      <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
      Back
    </Button>
  );
}
