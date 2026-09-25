import { supabase } from "@/lib/Supabaseclient";
import { fetchLiveWeather } from "@/lib/weatherApi";

// Same shape as the old src/data/destinations.ts, so LocationCard.tsx and
// Location.tsx don't need to change - only where the data comes from changes.
export interface Destination {
  id: string; // this is the DB "slug" column, used in URLs like /location/santorini
  name: string;
  country: string;
  image: string;
  rating: number;
  temperature: number;
  humidity: number;
  wind: string;
  description: string;
  coordinates: { lat: number; lng: number };
}

interface DestinationRow {
  slug: string;
  name: string;
  country: string;
  image_url: string;
  rating: number;
  temperature: number;
  humidity: number;
  wind: string;
  description: string;
  latitude: number;
  longitude: number;
}

function mapRow(row: DestinationRow): Destination {
  return {
    id: row.slug,
    name: row.name,
    country: row.country,
    image: row.image_url,
    rating: row.rating,
    temperature: row.temperature,
    humidity: row.humidity,
    wind: row.wind,
    description: row.description,
    coordinates: { lat: row.latitude, lng: row.longitude },
  };
}

// Overlays live Open-Meteo data onto a destination's stored fallback values.
// If the weather call fails (rate limit, network blip), the destination is
// simply returned unchanged with its last-known DB values - the page never
// breaks because of a weather API hiccup.
async function withLiveWeather(destination: Destination): Promise<Destination> {
  try {
    const live = await fetchLiveWeather(
      destination.coordinates.lat,
      destination.coordinates.lng
    );
    return { ...destination, ...live };
  } catch (error) {
    console.warn(`Live weather unavailable for ${destination.name}, using stored values`, error);
    return destination;
  }
}

export async function fetchDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .order("rating", { ascending: false });

  if (error) throw error;
  const destinations = (data as DestinationRow[]).map(mapRow);

  // Fetch live weather for all destinations in parallel rather than one
  // at a time - 8 destinations means 8 concurrent requests, well within
  // Open-Meteo's free limits.
  return Promise.all(destinations.map(withLiveWeather));
}

export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return withLiveWeather(mapRow(data as DestinationRow));
}