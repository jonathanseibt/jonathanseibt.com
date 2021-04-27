import { ButtonBase, Grid, useTheme } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { Box, ExternalLink, Separator, Typography } from 'src/components';

const Index: FC = () => {
  const theme = useTheme();

  return (
    <Box p={{ xs: 8, sm: 16 }} display='flex' flexDirection='column' justifyContent='space-between' minHeight='100vh'>
      <Box component='header' width={theme.spacing(64)} maxWidth='50vw'>
        <Link href='/' passHref>
          <ButtonBase focusRipple>
            <Box component='figure'>
              <Box
                component='img'
                src='jonathan-seibt-logo.png'
                alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
                width='100%'
                display='block'
              />
            </Box>
          </ButtonBase>
        </Link>
      </Box>

      <Grid component='main' container spacing={0} item md={6}>
        <Separator width={1} my={16} />

        <Box component='figure'>
          <Box
            component='img'
            src='two-fingers-up-emoji.png'
            alt='Yellow hand emoji, in a 3D way, with two fingers up, like a cool greeting gesture.'
            width={theme.spacing(16)}
            height={theme.spacing(16)}
            display='block'
          />
        </Box>

        <Separator width={1} my={2} />

        <Typography component='h1' variant='h3' color='primary' fontWeight={700} lineHeight='1.25'>
          Hey! My name's Jonathan Seibt, and I'm a Senior Front End Engineer.
        </Typography>

        <Separator width={1} my={2} />

        <Typography component='h2' variant='body1' color='primary' fontWeight={400} lineHeight='1.75'>
          From Caxias do Sul - RS - Brazil to the world. Since 1996 into life. Since 2007 into technology. Since 2014 into business.
        </Typography>

        <Separator width={1} my={8} />

        <Typography component='h3' variant='h5' color='primary' fontWeight={500} lineHeight='1.75'>
          Hey, how's it going? I'm really happy to have you here! I'm sure I'd like to get to know you better too. Please, feel free to get in touch and connect with me through{' '}
          <Typography component={ExternalLink} href='https://www.linkedin.com/in/jonathanseibt' spaceBefore fontWeight={700} fontSize='inherit'>
            LinkedIn
          </Typography>
          . There you can find out more about me too, and we can have a good virtual coffee together. What do you think?
        </Typography>

        <Separator width={1} my={16} />
      </Grid>

      <Box component='footer'>
        <Box component='nav'>
          <Grid component='ul' container spacing={8}>
            <Grid component='li' item>
              <Typography component={ExternalLink} href='https://www.linkedin.com/in/jonathanseibt' variant='body1' color='primary' fontWeight={600}>
                LinkedIn
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography component={ExternalLink} href='https://github.com/jonathanseibt' variant='body1' color='primary' fontWeight={600}>
                GitHub
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography component={ExternalLink} href='https://github.com/jonathanseibt/jonathanseibt.com' variant='body1' color='primary' fontWeight={600}>
                Source code
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
