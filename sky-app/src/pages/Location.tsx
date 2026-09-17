import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { MapPin, Star, Thermometer, Droplets, Wind, ExternalLink, Navigation } from "lucide-react";

const Location = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Link to="/tracker">
            <Button variant="hero">Back to Tracker</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
    destination.name + ", " + destination.country
  )}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination.coordinates.lat},${destination.coordinates.lng}`;

  return (
    <Layout>
      {/* Hero Map Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <MapPin className="w-4 h-4" />
              {destination.country}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-white text-lg font-semibold">
                {destination.rating.toFixed(1)}
              </span>
              <span className="text-white/70">Google Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">About this destination</h2>
              <p className="text-muted-foreground leading-relaxed">
                {destination.description}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Experience the unique charm and beauty of {destination.name}, located in the heart of {destination.country}. 
                This stunning destination offers travelers an unforgettable experience with its perfect weather conditions, 
                rich culture, and breathtaking landscapes. Whether you're seeking adventure, relaxation, or cultural 
                immersion, {destination.name} has something special for every type of traveler.
              </p>
            </div>

            {/* Weather Info */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Thermometer className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{destination.temperature}°C</p>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{destination.humidity}%</p>
                  <p className="text-sm text-muted-foreground">Humidity</p>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Wind className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{destination.wind}</p>
                  <p className="text-sm text-muted-foreground">Wind</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="glass-card p-6 sticky top-28">
              <h3 className="text-lg font-semibold mb-4">Plan Your Trip</h3>
              
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="w-full mb-3">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book Holiday
                </Button>
              </a>
              
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="navy" size="lg" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Locate on Maps
                </Button>
              </a>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Coordinates: {destination.coordinates.lat.toFixed(4)}, {destination.coordinates.lng.toFixed(4)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Location;
