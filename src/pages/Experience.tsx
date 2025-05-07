import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: 'https://pbs.twimg.com/profile_images/559714005728505856/weFtnHg9_400x400.png',
      name: 'Resilent Coders',
      position: 'Software Engineer',
      startDate: 'Janaury 2025',
      endDate: 'Present',
      duration: '5 Months',
      location: 'Boston, MA',
    },
    {
      id: 2,
      image: 'https://www.massmutualfcuhb.org/wp-content/themes/ncr-child-theme/images/logo.png',
      name: 'MassMutual Federal Credit Union',
      position: 'IT Analyst',
      startDate: 'September 2024',
      endDate: 'December 2024',
      duration: '4 Months',
      location: 'Springfield, MA',
    },
    {
      id: 3,
      image: 'https://leehamnews.com/wp-content/uploads/2019/02/Collins-Aerospace.jpeg',
      name: 'Collins Aerospace',
      position: 'T2 Deskptop Support',
      startDate: 'May 2024',
      endDate: 'September 2024',
      duration: '6 Months',
      location: 'Windsor Locks, CT',
    }
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
