import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-traffic-ai.jpg";

export const HeroSection = () => {
  // Scroll to How It Works section
  const handleWatchDemo = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent)] bg-[length:250px_250px] animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Proactive AI-Driven
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-white">
              Traffic Optimization
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
          >
            Preventing Congestion Before it Starts.
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mb-12"
          >
            <div className="relative mx-auto max-w-4xl">
              <img
                src={heroImage}
                alt="AI Traffic Management Visualization"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Introduction Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              Our revolutionary AI system analyzes real-time traffic patterns, predicts congestion 
              hotspots, and proactively reroutes vehicles before bottlenecks form. Experience the 
              future of urban mobility with intelligent traffic management that adapts, learns, and evolves.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="glass" size="xl" className="min-w-48" onClick={handleWatchDemo}>
              Watch Demo
            </Button>
            <Button variant="hero" size="xl" className="min-w-48">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 80%)" }}></div>
    </section>
  );
};