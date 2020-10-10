import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from 'components';

import content from './content';

const {
  title,
  subtitle,
  links,
  second_subtitle,
} = content;

const Contact = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary' style={{ marginTop: 20 }}>
      {subtitle}
    </Typography>
    <Typography variant='h6' color='textPrimary'>
      {second_subtitle}
    </Typography>
    <LinkList links={links} />
  </>
);

export default Contact;
