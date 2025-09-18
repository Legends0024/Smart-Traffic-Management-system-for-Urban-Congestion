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
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-100 flex items-center justify-center">
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  controls
                  poster="/video-thumb.png"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                <div className="bg-success/10 p-4 rounded-lg border border-success/20 text-center">
                  <div className="text-2xl font-bold text-success mb-1">12 min</div>
                  <div className="text-sm text-black">Time Saved</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">23%</div>
                  <div className="text-sm text-black">Fuel Efficiency</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-2 leading-relaxed text-center">
                Watch real users navigate through our AI-powered route optimization, experiencing significant time savings and environmental benefits on every trip.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};