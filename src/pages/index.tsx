import { ButtonBase, Grid, useTheme } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { Box, ExternalLink, Separator, Typography } from 'src/components';

const Index: FC = () => {
  const theme = useTheme();

  return (
    <Box p={{ xs: 8, sm: 16 }} display='flex' flexDirection='column' justifyContent='space-between' minHeight='100vh'>
      <Box width={theme.spacing(64)} maxWidth='50vw'>
        <Link href='/' passHref>
          <ButtonBase focusRipple>
            <Box
              component='img'
              src='jonathan-seibt-logo.png'
              alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
              width='100%'
            />
          </ButtonBase>
        </Link>
      </Box>

      <Grid container spacing={0} item md={6}>
        <Separator width={1} my={16} />

        <Box
          component='img'
          src='two-fingers-up-emoji.png'
          alt='Yellow hand emoji, in a 3D way, with two fingers up, like a cool greeting gesture.'
          width={theme.spacing(16)}
          height={theme.spacing(16)}
        />

        <Separator width={1} my={2} />

        <Typography component='h1' variant='h3' color='primary' fontWeight={700} lineHeight='1.25'>
          Hey! My name is Jonathan Seibt, and I'm a Senior Front End Engineer.
        </Typography>

        <Separator width={1} my={2} />

        <Typography component='h2' variant='body1' color='primary' fontWeight={400} lineHeight='1.75'>
          From Caxias do Sul - RS - Brazil to the world. Since 1996 into life. Since 2007 into technology. Since 2014 into business.
        </Typography>

        <Separator width={1} my={8} />

        <Typography component='h3' variant='h5' color='primary' fontWeight={500} lineHeight='1.75'>
          My bad, not much creativity was shown here. But I'd still like to get to know you better. Please, feel free to reach me out through
          <Typography spaceBefore component='span' fontWeight={700} fontSize='inherit'>
            <ExternalLink href='https://www.linkedin.com/in/jonathanseibt'>LinkedIn</ExternalLink>
          </Typography>
          , I'd be happy to connect with you! There you can find out more about me and we can have a good virtual coffee together. What do you think?
        </Typography>

        <Separator width={1} my={16} />
      </Grid>

      <Grid container spacing={8}>
        <Grid item>
          <Typography component='p' variant='body1' color='primary' fontWeight={600}>
            <ExternalLink href='https://www.linkedin.com/in/jonathanseibt'>LinkedIn</ExternalLink>
          </Typography>
        </Grid>

        <Grid item>
          <Typography component='p' variant='body1' color='primary' fontWeight={600}>
            <ExternalLink href='https://github.com/jonathanseibt'>GitHub</ExternalLink>
          </Typography>
        </Grid>

        <Grid item>
          <Typography component='p' variant='body1' color='primary' fontWeight={600}>
            <ExternalLink href='https://github.com/jonathanseibt/jonathanseibt.com'>Source code</ExternalLink>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
