import { supabase } from "@/lib/supabaseClient";

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

export async function fetchDestinations(): Promise<Destination[]> {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .order("rating", { ascending: false });

  if (error) throw error;
  return (data as DestinationRow[]).map(mapRow);
}

export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data ? mapRow(data as DestinationRow) : null;
}
