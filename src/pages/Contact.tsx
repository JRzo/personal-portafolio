import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Whatsapp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '4134799607',
      link: 'https://wa.me/+4134799607',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'juliosoftwaredev@gmail.com',
      link: 'mailto:juliosoftwaredev@gmail.com',
    },
    {
      id: 4,
      name: 'Github',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'JRzo',
      link: 'https://github.com/JRzo',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'Julio Rodriguez',
      link: 'https://www.linkedin.com/in/juliorodriguezpena/',
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
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
