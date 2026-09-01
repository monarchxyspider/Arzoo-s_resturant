/**
 * Map markers for Arzoo Restaurant – Lahore, Pakistan.
 * Used by components/Map.tsx.
 *
 * Position format: [latitude, longitude].
 */
import type { MapMarkerData } from "@/types";

/**
 * Arzoo Restaurant locations in Lahore.
 *
 * Note:
 * These coordinates are Lahore-area placeholder locations.
 * Replace them with the restaurant's exact coordinates when available.
 */
export const mapMarkers: MapMarkerData[] = [
  {
    position: [31.5204, 74.3587],
    title: "Arzoo Restaurant – Lahore",
    subtitle:
      "Enjoy authentic Pakistani cuisine, traditional flavours, and a warm dining experience in Lahore, Pakistan.",
    image: "/map/1.png",
  },
  {
    position: [31.5497, 74.3436],
    title: "Arzoo Restaurant – Gulberg",
    subtitle:
      "Visit Arzoo Restaurant in Lahore and enjoy delicious Pakistani dishes with family and friends.",
    image: "/map/2.png",
  },
  {
    position: [31.4697, 74.2728],
    title: "Arzoo Restaurant – Lahore",
    subtitle:
      "Taste the rich flavours of Pakistani cuisine at Arzoo Restaurant.",
    image: "/map/3.png",
  },
];