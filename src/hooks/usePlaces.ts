import { useEffect, useState } from "react";

import { parsePlacesCsv, sortByVerifiedAt, type Place } from "@/lib/places";

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
      const url = process.env.NEXT_PUBLIC_PLACES_URL;
      if (!url) {
        setError("NEXT_PUBLIC_PLACES_URL 환경 변수가 설정되지 않았어요.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`failed to fetch: ${response.status}`);
        }

        const csv = await response.text();
        const parsed = parsePlacesCsv(csv);
        if (!cancelled) {
          const approved = parsed.filter((place) => place.approved);
          setPlaces(sortByVerifiedAt(approved));
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
