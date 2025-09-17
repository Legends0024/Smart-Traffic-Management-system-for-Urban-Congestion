import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-dark py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Traffic Management?
            </h3>
            <p className="text-white/70 mb-8">
              Join the future of intelligent urban mobility with our AI-driven traffic optimization platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Demo
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © 2025 AI Traffic Management. All rights reserved.Team Mosambi
              </div>
              
              <div className="flex gap-6 text-sm text-white/60">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};