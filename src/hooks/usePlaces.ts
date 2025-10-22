import { useEffect, useState } from "react";

import type { Place } from "@/lib/places";

type UsePlacesResult = {
  places: Place[];
  loading: boolean;
  error: string | null;
};

export function usePlaces(): UsePlacesResult {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPlaces() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/places", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const json = await response.json();
        if (!cancelled) {
          setPlaces(json.places || []);
        }
      } catch (fetchError) {
        if (!cancelled) {
          setError("장소 데이터를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.");
          if (process.env.NODE_ENV !== "production") {
            console.error(fetchError);
          }
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPlaces();

    return () => {
      cancelled = true;
    };
  }, []);

  return { places, loading, error };
}
