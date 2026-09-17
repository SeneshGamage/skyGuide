import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Wind, MapPin, Compass } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

export function HeroGallery() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-xl animate-slide-in">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Wind className="w-4 h-4 text-primary" />
            <span className="text-white text-sm font-medium">Weather-Based Discovery</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Discover Your Perfect
            <span className="block text-primary">Weather Destination</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Find destinations that match your ideal weather conditions. From sunny beaches to snowy peaks, 
            let the weather guide your next adventure.
          </p>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">500+ Destinations</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Compass className="w-4 h-4 text-primary" />
              <span className="text-sm">Real-time Weather</span>
            </div>
          </div>

          <Link to="/tracker">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ChevronRight className="w-5 h-5 smooth-transition group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
