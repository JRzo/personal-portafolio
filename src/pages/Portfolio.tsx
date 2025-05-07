import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';
  const portfolios = [
    {
      id: 1,
      name: 'Basketball Predicitons',
      image: '/nbapredictions.png',
      link: 'https://basketball-prediction-b13e6353873b.herokuapp.com/',
    },
    {
      id: 2,
      name: 'Contact Book',
      image: '/contactBook.png',
      link: 'https://contact-book-app-65fbe047d847.herokuapp.com/profile',
    },
    {
      id: 12,
      name: 'Resource Tracker',
      image: '/resourceTracker.png',
      link: 'https://resource-tracker-1574ccab6559.herokuapp.com/profile',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
