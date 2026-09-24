import { useState, useMemo, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { WeatherFilters } from "@/components/tracker/WeatherFilters";
import { LocationCard } from "@/components/tracker/LocationCard";
import { fetchDestinations, Destination } from "@/lib/destinationsApi";
import { Search, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FiltersState {
  date: string;
  humidity: string;
  wind: string;
  temperature: number[];
  mist: boolean;
  rain: boolean;
}

const Tracker = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FiltersState>({
    date: "",
    humidity: "medium",
    wind: "medium",
    temperature: [0, 45],
    mist: false,
    rain: false,
  });

  useEffect(() => {
    fetchDestinations()
      .then(setDestinations)
      .catch((error) => {
        console.error(error);
        toast.error("Couldn't load destinations. Please try again.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinations
      .filter((dest) => {
        // Search filter
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          if (
            !dest.name.toLowerCase().includes(query) &&
            !dest.country.toLowerCase().includes(query)
          ) {
            return false;
          }
        }

        // Temperature filter
        if (
          dest.temperature < filters.temperature[0] ||
          dest.temperature > filters.temperature[1]
        ) {
          return false;
        }

        // Wind filter
        if (filters.wind !== "medium" && dest.wind.toLowerCase() !== filters.wind) {
          return false;
        }

        return true;
      })
      .sort((a, b) => b.rating - a.rating);
  }, [destinations, searchQuery, filters]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Weather <span className="text-primary">Tracker</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your perfect destination based on weather conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <WeatherFilters onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="glass-card p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-transition"
                />
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <>
                {/* Results Count */}
                <p className="text-sm text-muted-foreground mb-4">
                  {filteredDestinations.length} destinations found
                </p>

                {/* Results Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={destination.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <LocationCard {...destination} />
                    </div>
                  ))}
                </div>

                {filteredDestinations.length === 0 && (
                  <div className="text-center py-16 glass-card">
                    <p className="text-muted-foreground text-lg">
                      No destinations match your criteria. Try adjusting the filters.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tracker;