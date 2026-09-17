import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search, Filter, MapPin, Plane } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Welcome to SkyGuide",
    description: "Your ultimate weather-based travel planning companion. Discover destinations that match your ideal weather conditions.",
    icon: "🌤️",
    tip: "Start by exploring the Weather Tracker to find your perfect destination.",
  },
  {
    id: 2,
    title: "How to Search",
    description: "Use the search bar to find destinations by name or country. Our intelligent system will suggest the best matches.",
    icon: "🔍",
    tip: "Try searching for 'beach' or 'mountains' to find themed destinations.",
  },
  {
    id: 3,
    title: "Using Weather Filters",
    description: "Set your preferred temperature range, humidity level, and wind conditions. Filter by mist or rain for specific weather experiences.",
    icon: "🎚️",
    tip: "The temperature slider helps you find destinations within your comfort zone.",
  },
  {
    id: 4,
    title: "Exploring Locations",
    description: "Click on any destination card to view detailed information, weather data, and booking options.",
    icon: "📍",
    tip: "Each location card shows real-time weather information and Google ratings.",
  },
  {
    id: 5,
    title: "Booking Your Trip",
    description: "Found your dream destination? Click 'Book Holiday' to be redirected to Booking.com or 'Locate' to view on Google Maps.",
    icon: "✈️",
    tip: "Use the 'Locate' button to explore the area before booking.",
  },
];

const Manual = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            User <span className="text-primary">Manual</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how to use SkyGuide to find your perfect weather destination
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-12 relative">
            {/* Navigation Buttons - Fixed absolute position */}
            <Button
              variant="glass"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </Button>

            {/* Slide Content */}
            <div className="text-center animate-fade-in px-10 md:px-16" key={slide.id}>
              <div className="text-4xl md:text-6xl mb-3 md:mb-6">{slide.icon}</div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground mb-2 md:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-6 max-w-xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-[10px] md:text-sm font-medium">💡 Pro Tip: {slide.tip}</span>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6 text-center text-muted-foreground">
            Step {currentSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Quick Features */}
        <div className="grid md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-4 text-center">
            <Search className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Smart Search</p>
          </div>
          <div className="glass-card p-4 text-center">
            <Filter className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Weather Filters</p>
          </div>
          <div className="glass-card p-4 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Location Details</p>
          </div>
          <div className="glass-card p-4 text-center">
            <Plane className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Easy Booking</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manual;
