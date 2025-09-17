import { motion } from "framer-motion";
import mobileAppImage from "@/assets/mobile-app-demo.png";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Users, <span className="bg-gradient-primary bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our intelligent traffic management system transforms daily commutes and delivers measurable time savings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Mobile App Demo Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-xl">
              <img
                src={mobileAppImage}
                alt="User showing mobile app with time savings notification - You saved 12 minutes on this trip"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Video Demo Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-card rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Experience the Difference</h3>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/api/placeholder/800/450"
                >
                  <source src="/videos/app-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer shadow-primary group-hover:bg-primary transition-colors"
                  >
                    <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <div className="text-2xl font-bold text-success mb-1">12 min</div>
                  <div className="text-sm text-black">Time Saved</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">23%</div>
                  <div className="text-sm text-black">Fuel Efficiency</div>
                </div>
              </div>

              <p className="text-muted-foreground mt-6 leading-relaxed">
                Watch real users navigate through our AI-powered route optimization, 
                experiencing significant time savings and environmental benefits on every trip.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};