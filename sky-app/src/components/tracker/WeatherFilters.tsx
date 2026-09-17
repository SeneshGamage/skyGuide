import { useState } from "react";
import { Calendar, Droplets, Wind, Thermometer, Cloud, CloudRain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface FiltersState {
  date: string;
  humidity: string;
  wind: string;
  temperature: number[];
  mist: boolean;
  rain: boolean;
}

interface WeatherFiltersProps {
  onFilterChange: (filters: FiltersState) => void;
}

export function WeatherFilters({ onFilterChange }: WeatherFiltersProps) {
  const [filters, setFilters] = useState<FiltersState>({
    date: "",
    humidity: "medium",
    wind: "medium",
    temperature: [15, 30],
    mist: false,
    rain: false,
  });

  const updateFilter = <K extends keyof FiltersState>(key: K, value: FiltersState[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const humidityOptions = ["Low", "Medium", "High"];
  const windOptions = ["Low", "Medium", "High"];

  return (
    <div className="glass-card p-6 space-y-6">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <Thermometer className="w-5 h-5 text-primary" />
        Weather Filters
      </h3>

      {/* Date Picker */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Travel Date
        </label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => updateFilter("date", e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-transition"
        />
      </div>

      {/* Temperature Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Thermometer className="w-4 h-4" />
          Temperature Range: {filters.temperature[0]}°C - {filters.temperature[1]}°C
        </label>
        <Slider
          value={filters.temperature}
          onValueChange={(value) => updateFilter("temperature", value)}
          min={0}
          max={45}
          step={1}
          className="py-2"
        />
      </div>

      {/* Humidity */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Droplets className="w-4 h-4" />
          Humidity
        </label>
        <div className="flex gap-2">
          {humidityOptions.map((option) => (
            <Button
              key={option}
              variant={filters.humidity === option.toLowerCase() ? "default" : "glass"}
              size="sm"
              onClick={() => updateFilter("humidity", option.toLowerCase())}
              className="flex-1"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Wind */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Wind className="w-4 h-4" />
          Wind Condition
        </label>
        <div className="flex gap-2">
          {windOptions.map((option) => (
            <Button
              key={option}
              variant={filters.wind === option.toLowerCase() ? "default" : "glass"}
              size="sm"
              onClick={() => updateFilter("wind", option.toLowerCase())}
              className="flex-1"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Weather Conditions */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">Weather Conditions</label>
        <div className="flex gap-3">
          <button
            onClick={() => updateFilter("mist", !filters.mist)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border smooth-transition",
              filters.mist
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white/50 border-border hover:border-primary/50"
            )}
          >
            <Cloud className="w-4 h-4" />
            Mist
          </button>
          <button
            onClick={() => updateFilter("rain", !filters.rain)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border smooth-transition",
              filters.rain
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-white/50 border-border hover:border-primary/50"
            )}
          >
            <CloudRain className="w-4 h-4" />
            Rain
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          size="lg"
          onClick={() => {
            const defaultFilters = {
              date: "",
              humidity: "medium",
              wind: "medium",
              temperature: [15, 30],
              mist: false,
              rain: false,
            };
            setFilters(defaultFilters);
            onFilterChange(defaultFilters);
          }}
        >
          Reset
        </Button>
        <Button variant="hero" className="flex-1" size="lg">
          Search
        </Button>
      </div>
    </div>
  );
}
