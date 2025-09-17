import { motion } from "framer-motion";
import sensorsImage from "@/assets/sensors-data.jpg";
import aiBrainImage from "@/assets/ai-brain-traffic.png";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Data Analysis",
      description: "Advanced IoT sensors and traffic cameras collect real-time data on vehicle flow, speed patterns, and road conditions across the entire network.",
      image: sensorsImage,
    },
    {
      number: "02",
      title: "Predictive Modeling",
      description: "Our AI brain processes massive datasets using machine learning algorithms to predict traffic congestion patterns before they occur.",
      image: aiBrainImage,
    },
    {
      number: "03",
      title: "Rerouting Simulation",
      description: "Smart rerouting algorithms simulate optimal traffic flow and guide vehicles through alternative routes in real-time.",
      video: "sumo.mp4",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our three-step process transforms chaotic traffic into smooth, intelligent flow through cutting-edge AI technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gradient-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-primary">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                
                {/* Image or Video */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  {step.video ? (
                    <video
                      className="w-full h-48 object-cover"
                      controls
                      poster="/api/placeholder/400/300"
                    >
                      <source src={step.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};