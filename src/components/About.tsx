import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const philosophy = [
  'Build secure systems, break insecure ones.',
  'Security is a core feature, not an afterthought.',
  'Automation and CI/CD are the backbone of modern engineering.',
];

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      data-section="about"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              About <br /> Me In Detail
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.p
                className="text-lg md:text-xl text-txt-secondary leading-relaxed font-light"
                variants={itemVariants}
              >
                I am a Computer Science graduate with a specialization in Cyber Security. Currently working as a AI Software Developer Engineer - 1. I work on building scalable full-stack applications and Security infrastructure and automating security operations.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-txt-secondary leading-relaxed font-light"
                variants={itemVariants}
              >
                I have experience deploying SIEM like Wazuh and ELK for threat detection, while also building live apps using NodeJs, Next.js, FastAPI, MySQL and PostgreSQL.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-txt-secondary leading-relaxed font-light"
                variants={itemVariants}
              >
                My hackathon project have been recognized with university award and selected for patent filing.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-6 pt-4"
              variants={containerVariants}
            >
              {philosophy.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-4 p-6 rounded-lg bg-primary-surface border border-white/5 hover:border-accent/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-lg text-txt-primary font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
