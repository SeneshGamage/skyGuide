// Open-Meteo: no API key, no sign-up, free for non-commercial use up to
// 10,000 calls/day. Called directly from the browser - there's no secret
// to protect, so no Edge Function is needed here.
// Docs: https://open-meteo.com/en/docs

export interface LiveWeather {
  temperature: number; // Celsius
  humidity: number; // %
  wind: "Low" | "Medium" | "High";
}

// The app displays wind as a category, not a raw speed, so km/h from the
// API is bucketed into the same three labels the UI already uses.
function categorizeWind(speedKmh: number): LiveWeather["wind"] {
  if (speedKmh < 15) return "Low";
  if (speedKmh <= 35) return "Medium";
  return "High";
}

export async function fetchLiveWeather(lat: number, lng: number): Promise<LiveWeather> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lng));
  url.searchParams.set("current", "temperature_2m,relative_humidity_2m,wind_speed_10m");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Open-Meteo request failed: ${response.status}`);
  }

  const data = await response.json();
  const current = data.current;

  return {
    temperature: Math.round(current.temperature_2m),
    humidity: Math.round(current.relative_humidity_2m),
    wind: categorizeWind(current.wind_speed_10m),
  };
}
