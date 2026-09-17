import { Link } from "react-router-dom";
import { Star, MapPin, Thermometer, Droplets, Wind } from "lucide-react";

interface LocationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  temperature: number;
  humidity: number;
  wind: string;
  description: string;
}

export function LocationCard({
  id,
  name,
  country,
  image,
  rating,
  temperature,
  humidity,
  wind,
  description,
}: LocationCardProps) {
  return (
    <Link to={`/location/${id}`}>
      <article className="glass-card overflow-hidden group cursor-pointer smooth-transition hover:shadow-glow hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover smooth-transition group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <MapPin className="w-3 h-3" />
            {country}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary smooth-transition">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Weather Info */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Thermometer className="w-4 h-4 text-primary" />
              {temperature}°C
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Droplets className="w-4 h-4 text-blue-500" />
              {humidity}%
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Wind className="w-4 h-4 text-cyan-500" />
              {wind}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
