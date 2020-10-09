import {
  FaEnvelope,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const content = {
  title: 'Contact.',
  subtitle: 'Rob Jones',
  second_subtitle: 'Everything Project Services',
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
  subtitle2: 'Nico Gutierrez',
  second_subtitle2: 'All Things Development',
  links2: [
    {
      to: 'mailto:nico@simplifiedrec.com.au',
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
