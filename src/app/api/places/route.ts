import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { PlaceSchema, type Place } from "@/lib/places";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("places_with_category")
      .select("*")
      .order("verified_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch places from database" },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json({ places: [] });
    }

    // Validate data
    const validPlaces: Place[] = [];
    for (const row of data) {
      const result = PlaceSchema.safeParse(row);
      if (result.success) {
        validPlaces.push(result.data);
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.warn("Invalid place row skipped:", row);
          console.warn("Validation errors:", result.error.format());
        }
      }
    }

    return NextResponse.json({ places: validPlaces });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
