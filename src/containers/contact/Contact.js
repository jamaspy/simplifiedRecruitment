import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from 'components';

import content from './content';

const {
  title,
  subtitle1,
  links1,
  second_subtitle1,
  subtitle2,
  links2,
  second_subtitle2,
} = content;
console.log(content);
const Contact = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary' style={{ marginTop: 20 }}>
      {subtitle1}
    </Typography>
    <Typography variant='h6' color='textPrimary'>
      {second_subtitle1}
    </Typography>
    <LinkList links={links1} />
    <Typography variant='h3' color='textPrimary' style={{ marginTop: 20 }}>
      {subtitle2}
    </Typography>
    <Typography variant='h6' color='textPrimary'>
      {second_subtitle2}
    </Typography>
    <LinkList links={links2} />
  </>
);

export default Contact;
