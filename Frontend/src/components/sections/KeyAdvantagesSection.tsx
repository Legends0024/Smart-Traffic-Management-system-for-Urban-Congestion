import { motion } from "framer-motion";
import { Car, Clock, Leaf, Shield, Cog, BarChart3 } from "lucide-react";

export const KeyAdvantagesSection = () => {
  const advantages = [
    {
      icon: Car,
      title: "Proactive Prevention",
      description: "Anticipate and prevent traffic jams before they form, keeping vehicles moving smoothly.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Clock,
      title: "Reduced Travel Time",
      description: "Cut commute times by up to 40% through intelligent route optimization and traffic flow management.",
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Lower emissions and fuel consumption through optimized traffic flow and reduced idling time.",
      gradient: "from-success to-success-light",
    },
    {
      icon: Shield,
      title: "Empowered Authorities",
      description: "Give traffic management teams real-time insights and predictive tools for better decision making.",
      gradient: "from-accent to-accent-light",
    },
    {
      icon: Cog,
      title: "Robust Technology",
      description: "Built on proven AI algorithms with 99.9% uptime and scalable cloud infrastructure.",
      gradient: "from-warning to-warning-light",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting to optimize urban mobility strategies over time.",
      gradient: "from-primary-light to-secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            Key <span className="bg-gradient-secondary bg-clip-text text-transparent">Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the transformative benefits of AI-driven traffic management that revolutionizes urban mobility.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};