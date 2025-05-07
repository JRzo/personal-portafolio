import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  // mockup education data
  const educations = [
    {
      id: 1,
      image: 'https://ubi.edu/wp-content/uploads/2025/01/boston-university-logo.png',
      name: 'Boston University',
      position: 'Master Of Science Computer Information System',
      startDate: 'October 2024',
      endDate: 'May 2026',
      duration: '2 years',
      location: 'Boston, MA',
    },
    {
      id: 2,
      image: 'https://www.elms.edu/wp-content/uploads/2019/07/Elms-Standard-Logo-green-with-white-background.jpg',
      name: 'Elms College',
      position: 'BA Computer Science & IT',
      startDate: 'September 2021',
      endDate: 'May 2024',
      duration: '3 years',
      location: 'Chicopee, MA',
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
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
