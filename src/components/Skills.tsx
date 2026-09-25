import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILL_CATEGORIES } from '../constants';

const SkillItem = ({ tech, index }: { tech: any; index: number }) => {
  const Icon = tech.icon;
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors cursor-default group border border-transparent hover:border-white/5"
      variants={itemVariants}
      whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
    >
      <div className="p-2 rounded-md bg-secondary/10 text-secondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
        <Icon size={20} />
      </div>
      <span className="text-sm font-medium text-txt-secondary group-hover:text-txt-primary transition-colors">
        {tech.name}
      </span>
    </motion.div>
  );
};

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section
      id="skills"
      data-section="skills"
      className="section-padding bg-primary"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={headerVariants}
            className="max-w-xl pl-6 border-l-2 border-accent relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Stack
            </h2>
            <p className="text-txt-secondary text-lg">
              Tools and technologies I work with:
            </p>
          </motion.div>

          {/* Adjusted to grid-cols-2 or 3 depending on desired density */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 pl-6">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                variants={categoryVariants}
              >
                <h3 className="text-xl font-bold text-txt-primary border-b border-white/5 pb-2 inline-block pr-6">
                  {category.name}
                </h3>
                <div className="flex flex-col gap-2">
                  {category.techs.map((tech, index) => (
                    <SkillItem
                      key={tech.name}
                      tech={tech}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
