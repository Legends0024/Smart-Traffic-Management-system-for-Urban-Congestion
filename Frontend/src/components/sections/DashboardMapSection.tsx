import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dashboardImage from "@/assets/dashboard-mockup.png";

// Interactive Map Component
const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Leaflet map directly
    if (typeof window !== "undefined" && mapRef.current && !isLoaded) {
      import("leaflet").then((L) => {
        setIsLoaded(true);
        
        // Clear any existing map
        if (mapRef.current) {
          mapRef.current.innerHTML = "";
        }

        const map = L.map(mapRef.current).setView([28.6139, 77.2090], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Fix for default marker icons
        const customIcon = new L.Icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        // Main marker
        L.marker([28.6139, 77.2090], { icon: customIcon })
          .addTo(map)
          .bindPopup(`
            <div style="text-align: center; padding: 8px;">
              <h4 style="font-weight: bold; margin-bottom: 4px;">New Delhi Traffic Hub</h4>
              <p style="font-size: 12px; color: #666; margin: 0;">Central monitoring station</p>
            </div>
          `);

        // Congestion zone (red circle)
        L.circle([28.6129, 77.2290], {
          color: "#dc2626",
          fillColor: "#ef4444",
          fillOpacity: 0.3,
          radius: 1000,
          weight: 2,
        })
          .addTo(map)
          .bindPopup(`
            <div style="text-align: center; padding: 8px;">
              <h4 style="font-weight: bold; color: #dc2626; margin-bottom: 4px;">Congestion Zone</h4>
              <p style="font-size: 12px; color: #666; margin: 0;">High traffic density detected</p>
            </div>
          `);

        // Affected area polygon (orange)
        const affectedArea = [
          [28.6200, 77.2000],
          [28.6250, 77.2100],
          [28.6180, 77.2200],
          [28.6120, 77.2150],
          [28.6140, 77.2050],
        ] as [number, number][];

        L.polygon(affectedArea, {
          color: "#ea580c",
          fillColor: "#f97316",
          fillOpacity: 0.2,
          weight: 2,
        })
          .addTo(map)
          .bindPopup(`
            <div style="text-align: center; padding: 8px;">
              <h4 style="font-weight: bold; color: #ea580c; margin-bottom: 4px;">Affected Area</h4>
              <p style="font-size: 12px; color: #666; margin: 0;">Alternative routes recommended</p>
            </div>
          `);
      });
    }
  }, [isLoaded]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div ref={mapRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground">Loading map...</div>
        </div>
      )}
    </>
  );
};

export const DashboardMapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time <span className="bg-gradient-accent bg-clip-text text-transparent">Monitoring</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced dashboard analytics combined with interactive mapping provides comprehensive traffic oversight and control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Traffic Control Dashboard</h3>
              
              <div className="relative rounded-lg overflow-hidden shadow-md mb-6">
                <img
                  src={dashboardImage}
                  alt="Traffic Management Dashboard"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="text-sm font-medium text-card-foreground">Active Vehicles</span>
                  <span className="text-lg font-bold text-primary">24,567</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="text-sm font-medium text-card-foreground">Traffic Flow</span>
                  <span className="text-lg font-bold text-success">Optimal</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                  <span className="text-sm font-medium text-card-foreground">Avg. Speed</span>
                  <span className="text-lg font-bold text-secondary">45 km/h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Interactive Traffic Map</h3>
              
              <div className="h-96 rounded-lg overflow-hidden shadow-md relative">
                <InteractiveMap />
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">Congestion Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-muted-foreground">Affected Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Monitoring Station</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};