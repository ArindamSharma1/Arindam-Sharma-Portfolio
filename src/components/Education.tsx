import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="section-padding bg-primary" ref={ref}>
      <div className="section-max-width">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Education
            </h2>
            <p className="text-txt-secondary text-lg">
              Academic foundation and achievements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            <motion.div
              className="group p-6 md:p-8 rounded-lg bg-primary-surface border border-secondary/10 hover:border-accent/30 transition-all ml-0 md:ml-4"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mt-1">
                    <GraduationCap size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-txt-primary">
                      B.Tech in Computer Science Engineering
                    </h3>
                    <p className="text-accent font-semibold text-lg">Jaypee University of Information Technology (JUIT)</p>
                    <p className="text-txt-secondary mt-1">Cyber Security Specialization</p>
                    <p className="text-txt-secondary text-sm mt-1">2022 - 2026</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 mt-1">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-txt-primary font-medium">1st Prize - University Hackathon</p>
                    <p className="text-txt-secondary text-sm">Developed a multi-language cloud-based LMS that won top honors among 50+ teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 mt-1">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-txt-primary font-medium">Patent Filed</p>
                    <p className="text-txt-secondary text-sm">Project selected for patent filing by the university.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
