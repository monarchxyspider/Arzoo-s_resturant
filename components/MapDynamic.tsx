"use client";

/**
 * MapDynamic – Client-only wrapper for the Arzoo Restaurant
 * Lahore, Pakistan Leaflet map.
 *
 * next/dynamic with ssr: false prevents "window is not defined"
 * during server-side rendering because Leaflet requires browser APIs.
 */

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function MapDynamic() {
  return <Map />;
}