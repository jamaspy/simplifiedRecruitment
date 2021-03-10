import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const content = {
  title: 'Contact.',
  subtitle1: 'Rob Jones',
  second_subtitle1: '+61 404 700 066',
  links1: [
    {
      to: 'mailto:rob@simplifiedrec.com.au',
      text: 'Email',
      Icon: FaEnvelope,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/rob-jones-28775131/',
      text: 'LinkedIn',
      Icon: FaLinkedinIn,
      newTab: true,
    },
  ],
  subtitle2: 'Nico Gutierrez',
  second_subtitle2: '+61 433 608 840',
  links2: [
    {
      to: 'mailto:nico@simplifiedrec.com',
      text: 'Email',
      Icon: FaEnvelope,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/nicolas-gutierrez-a0679631/',
      text: 'LinkedIn',
      Icon: FaLinkedinIn,
      newTab: true,
    },
  ],
};

export default content;
