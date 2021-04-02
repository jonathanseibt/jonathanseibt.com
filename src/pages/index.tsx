import { Box, ButtonBase, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { ExternalLink, Separator, TypographySpace } from 'src/components';

const Index: FC = () => {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box p={phone ? 8 : 16} display='flex' flexDirection='column' justifyContent='space-between' minHeight='100vh'>
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

        <Typography component='h1' variant='h3' color='primary'>
          <Box component='span' fontWeight='700' lineHeight='1.25'>
            Hey! My name is Jonathan Seibt, and I'm a Senior Front End Engineer.
          </Box>
        </Typography>

        <Separator width={1} my={2} />

        <Typography component='h2' variant='body1' color='primary'>
          <Box component='span' fontWeight='400' lineHeight='1.75'>
            From Caxias do Sul - RS - Brazil to the world. Since 1996 into life. Since 2007 into technology. Since 2014 into business.
          </Box>
        </Typography>

        <Separator width={1} my={8} />

        <Typography component='h3' variant='h5' color='primary'>
          <Box component='span' fontWeight='500' lineHeight='1.75'>
            My bad, not much creativity was shown here. But I'd still like to get to know you better. Please, feel free to reach me out through
            <TypographySpace before>
              <Box component='span' fontWeight='700'>
                <ExternalLink href='https://www.linkedin.com/in/jonathanseibt'>LinkedIn</ExternalLink>
              </Box>
            </TypographySpace>
            , I'd be happy to connect with you! There you can find out more about me and we can have a good virtual coffee together. What do you think?
          </Box>
        </Typography>

        <Separator width={1} my={16} />
      </Grid>

      <Grid container spacing={8}>
        <Grid item>
          <Typography component='p' variant='body1' color='primary'>
            <Box fontWeight='600'>
              <ExternalLink href='https://www.linkedin.com/in/jonathanseibt'>LinkedIn</ExternalLink>
            </Box>
          </Typography>
        </Grid>

        <Grid item>
          <Typography component='p' variant='body1' color='primary'>
            <Box fontWeight='600'>
              <ExternalLink href='https://github.com/jonathanseibt'>GitHub</ExternalLink>
            </Box>
          </Typography>
        </Grid>

        <Grid item>
          <Typography component='p' variant='body1' color='primary'>
            <Box fontWeight='600'>
              <ExternalLink href='https://github.com/jonathanseibt/jonathanseibt.com'>Source code</ExternalLink>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
