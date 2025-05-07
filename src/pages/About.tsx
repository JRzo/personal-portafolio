import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Julio</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
      As a Software Engineer proficient in TypeScript and well-versed in popular frameworks such as React JS. I bring more than just coding skills to the table. I am passionate about architecting and implementing scalable application architectures, carefully considering components, interfaces, data models, flows, and security designs to build robust web applications. My full-stack development expertise allows me to design, develop, and deploy high-quality web applications, leveraging Javascript and ReactJS (frontend) and crafting reusable UI components. 
      </p>
      <p>
      I am also experienced in designing and developing efficient RESTful APIs utilizing PostgreSQL and MongoDB. Beyond development, I am committed to ensuring code excellence through rigorous unit and integration testing, active participation in code reviews, and diligent debugging across the entire stack. I thrive in collaborative environments, working effectively with designers, product managers, and other developers to deliver high-quality software solutions that truly align with business needs. My technical expertise enables me to create highly performant and elegant solutions that are not only easy to maintain and scale but also deliver intuitive user experiences through the implementation of modern design principles. I am always eager to learn new technologies and continuously improve my skills to contribute innovative solutions.
      </p>
    </motion.section>
  );
};
