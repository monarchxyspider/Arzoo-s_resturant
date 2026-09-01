"use client";

/**
 * Map – Interactive Leaflet map for Arzoo Restaurant in Lahore, Pakistan.
 * Uses react-leaflet; marker data comes from data/mapMarkers.ts.
 * Only runs on the client through MapDynamic because Leaflet requires browser APIs.
 */

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMediaQuery } from "react-responsive";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { mapMarkers } from "@/data/mapMarkers";

/** Custom pin icon for Arzoo Restaurant markers. */
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

export default function Map() {
  /** Responsive map height and zoom for mobile devices. */
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <MapContainer
        /* Lahore, Pakistan */
        center={[31.5204, 74.3587]}
        zoom={isMobile ? 11 : 13}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        {/* CartoDB light tiles with OpenStreetMap attribution */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {mapMarkers.map((marker) => (
          <Marker
            key={marker.title}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>
              <div className="flex gap-x-[30px]">
                <div className="flex-1">
                  <h3>{marker.title}</h3>
                  <p className="leading-snug">
                    {marker.subtitle}
                  </p>
                </div>

                <div className="flex-1">
                  <Image
                    src={marker.image}
                    width={130}
                    height={160}
                    alt={marker.title}
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
}