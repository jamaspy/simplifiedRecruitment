import {
  FaEnvelope,
  FaLinkedinIn,
} from 'react-icons/fa';

const content = {
  title: 'Contact.',
  subtitle: 'Rob Jones',
  second_subtitle: '+61 404 700 066',
  links: [
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
};

export default content;
