import { Box, Grid, Typography } from '@mui/material'
import ImageHandWithTwoFingersUpEmoji from '@public/hand-with-two-fingers-up-emoji.png'
import ImageJonathanSeibtLogo from '@public/jonathan-seibt-logo.png'
import { ExternalLink, Gap } from '@src/components'
import Image from 'next/image'
import Link from 'next/link'

export default function IndexPage(): JSX.Element {
  return (
    <Box padding={{ xs: 8, sm: 16 }}>
      <Box component='header'>
        <Link href='/' style={{ display: 'flex' }}>
          <Image
            width={256}
            src={ImageJonathanSeibtLogo}
            alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
          />
        </Link>
      </Box>

      <Box component='main'>
        <Grid container item spacing={0} md={6} flexDirection='column'>
          <Gap vertical={32} />

          <Image
            width={64}
            src={ImageHandWithTwoFingersUpEmoji}
            alt='Yellow hand emoji, in a 3D style, with two fingers up, like a cool greeting gesture.'
            className='animation-wave'
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
            Hey, how's it going? I'm really happy to have you here! I'm sure I'd like to get to know you better too.
            Please, feel free to get in touch and connect with me through{' '}
            <Box display='inline-table'>
              <Typography
                component={ExternalLink}
                href='https://goto.jonathanseibt.com/linkedin'
                fontWeight={700}
                fontSize='inherit'>
                LinkedIn
              </Typography>
              .
            </Box>{' '}
            There you can find out more about me, and we can have a good virtual coffee together. What do you think?
          </Typography>

          <Gap vertical={32} />
        </Grid>
      </Box>

      <Box component='footer'>
        <Box component='nav'>
          <Grid component='ul' container spacing={8}>
            <Grid component='li' item>
              <Typography
                component={ExternalLink}
                variant='body1'
                color='primary'
                fontWeight={600}
                href='https://goto.jonathanseibt.com/linkedin'>
                LinkedIn
              </Typography>
            </Grid>

            <Grid component='li' item>
              <Typography
                component={ExternalLink}
                variant='body1'
                color='primary'
                fontWeight={600}
                href='https://goto.jonathanseibt.com/github'>
                GitHub
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
