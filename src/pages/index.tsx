import { Box, ButtonBase, Grid, SX, Typography } from '@mui/material';
import { ExternalLink, Gap, Image } from '@src/components';
import Link from 'next/link';

export default function IndexPage(): JSX.Element {
  return (
    <Box padding={{ xs: 8, sm: 16 }}>
      <Box component='header'>
        <Link href='/' passHref>
          <ButtonBase disableRipple>
            <Image
              src='jonathan-seibt-logo.png'
              alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
              sx={(theme): SX => ({ width: theme.spacing(64), maxWidth: '50vw' })}
            />
          </ButtonBase>
        </Link>
      </Box>

      <Box component='main'>
        <Grid container item spacing={0} md={6} flexDirection='column'>
          <Gap vertical={32} />

          <Image
            src='hand-with-two-fingers-up-emoji.png'
            alt='Yellow hand emoji, in a 3D style, with two fingers up, like a cool greeting gesture.'
            sx={(theme): SX => ({ width: theme.spacing(16), height: theme.spacing(16) })}
          />

          <Gap vertical={4} />

          <Typography component='h1' color='primary' fontWeight={700} lineHeight='1.25' variant='h3'>
            Hey! My name is Jonathan Seibt, and I'm an Engineering Manager.
          </Typography>

          <Gap vertical={4} />

          <Typography component='h2' color='primary' fontWeight={400} lineHeight='1.75' variant='body1'>
            From Caxias do Sul - RS - Brazil to the world. Since 2007 into technology. Since 2014 into business.
          </Typography>

          <Gap vertical={16} />

          <Typography component='h3' color='primary' fontWeight={500} lineHeight='1.75' variant='h5'>
            Hey, how's it going? I'm really happy to have you here! I'm sure I'd like to get to know you better too. Please, feel free to get in touch and connect with me through{' '}
            <Box display='inline-table'>
              <Typography component={ExternalLink} href='https://www.linkedin.com/in/jonathanseibt' fontWeight={700} fontSize='inherit'>
                LinkedIn
              </Typography>
              .
            </Box>{' '}
            There you can find out more about me too, and we can have a good virtual coffee together. What do you think?
          </Typography>

          <Gap vertical={32} />
        </Grid>
      </Box>

      <Box component='footer'>
        <Box component='nav'>
          <Grid component='ul' container spacing={8}>
            <Grid component='li' item>
              <Typography component={ExternalLink} variant='body1' color='primary' fontWeight={600} href='https://www.linkedin.com/in/jonathanseibt'>
                LinkedIn
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography component={ExternalLink} variant='body1' color='primary' fontWeight={600} href='https://github.com/jonathanseibt'>
                GitHub
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography component={ExternalLink} variant='body1' color='primary' fontWeight={600} href='https://github.com/jonathanseibt/jonathanseibt.com'>
                Source code
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
