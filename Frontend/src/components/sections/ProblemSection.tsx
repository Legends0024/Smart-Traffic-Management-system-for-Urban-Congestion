import { motion } from "framer-motion";
import trafficCongestionImage from "@/assets/traffic-congestion.png";

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                The <span className="bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">Problem</span> is Real
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Traffic congestion costs cities billions annually in lost productivity, 
                increased fuel consumption, and environmental damage. Traditional reactive 
                approaches only address problems after they occur.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="bg-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-destructive mb-2">$87B</div>
                  <div className="text-sm text-card-foreground">Annual cost of congestion in the US</div>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-warning mb-2">54 Hours</div>
                  <div className="text-sm text-card-foreground">Average time lost per commuter yearly</div>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2">3.3B</div>
                  <div className="text-sm text-card-foreground">Gallons of fuel wasted annually</div>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-card-foreground">Increase in CO2 emissions</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={trafficCongestionImage}
                alt="Traffic congestion in urban city showing the problem of wasted time, fuel, and money"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};