export interface Destination {
  id: string;
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

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
    temperature: 26,
    humidity: 55,
    wind: "Low",
    description: "Iconic white-washed buildings and stunning sunsets over the Aegean Sea.",
    coordinates: { lat: 36.3932, lng: 25.4615 },
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    temperature: 30,
    humidity: 75,
    wind: "Medium",
    description: "Tropical paradise with lush rice terraces, temples, and beautiful beaches.",
    coordinates: { lat: -8.4095, lng: 115.1889 },
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    rating: 4.9,
    temperature: 12,
    humidity: 65,
    wind: "High",
    description: "Majestic mountain peaks, pristine lakes, and world-class skiing.",
    coordinates: { lat: 46.8182, lng: 8.2275 },
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    rating: 4.9,
    temperature: 29,
    humidity: 80,
    wind: "Low",
    description: "Crystal-clear waters, overwater bungalows, and pristine coral reefs.",
    coordinates: { lat: 3.2028, lng: 73.2207 },
  },
  {
    id: "iceland",
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80",
    rating: 4.7,
    temperature: 8,
    humidity: 70,
    wind: "High",
    description: "Northern lights, geysers, and dramatic volcanic landscapes.",
    coordinates: { lat: 64.1466, lng: -21.9426 },
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.6,
    temperature: 35,
    humidity: 45,
    wind: "Low",
    description: "Futuristic skyline, luxury shopping, and desert adventures.",
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    rating: 4.8,
    temperature: 22,
    humidity: 60,
    wind: "Low",
    description: "Ancient temples, traditional gardens, and cherry blossom beauty.",
    coordinates: { lat: 35.0116, lng: 135.7681 },
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    rating: 4.7,
    temperature: 24,
    humidity: 55,
    wind: "Medium",
    description: "Table Mountain, stunning coastlines, and vibrant culture.",
    coordinates: { lat: -33.9249, lng: 18.4241 },
  },
];
