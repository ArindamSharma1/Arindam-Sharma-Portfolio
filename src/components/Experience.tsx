import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

import { EXPERIENCES } from '../constants';

const experiences = EXPERIENCES;

export const Experience = () => {
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
                delayChildren: 0.2,
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

    const headerVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="experience"
            data-section="experience"
            className="section-padding"
            ref={ref}
        >
            <div className="section-max-width">
                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
                            Experience
                        </h2>
                        <p className="text-txt-secondary text-lg">
                            My hands on experience.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company + exp.duration}
                                className="group relative"
                                variants={itemVariants}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>

                                <motion.div
                                    className="p-6 md:p-8 rounded-lg bg-primary-surface hover:bg-primary-surface/80 transition-colors border border-secondary/10 hover:border-accent/30 ml-0 md:ml-4"
                                    whileHover={{
                                        x: 8,
                                        boxShadow: '0 12px 24px rgba(139, 124, 246, 0.1)',
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-secondary/10 mt-1">
                                                <Briefcase size={20} className="text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-txt-primary">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-accent font-semibold">{exp.company}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4 text-txt-secondary">
                                        <Calendar size={16} />
                                        <span className="text-sm font-medium">{exp.duration}</span>
                                    </div>

                                    <p className="text-txt-secondary leading-relaxed mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full"
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 124, 246, 0.2)' }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
};
