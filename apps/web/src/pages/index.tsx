import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { SystemStyleObject } from "@mui/system";
import { NextPage } from "next";
import Link from "next/link";
import { ExternalLink, Image, Separator } from "src/components";

const IndexPage: NextPage = (): JSX.Element => (
  <Box padding={{ xs: 8, sm: 16 }}>
    <Box component='header'>
      <Link href='/' passHref>
        <ButtonBase focusRipple>
          <Image
            src='jonathan-seibt-logo.png'
            alt='Jonathan Seibt logo, in thin typography, black color, transparent background, all capital and well spaced, like a modern font face.'
            sx={(theme): SystemStyleObject => ({ width: theme.spacing(64), maxWidth: "50vw" })}
          />
        </ButtonBase>
      </Link>
    </Box>

    <Box component='main'>
      <Grid container spacing={0} item md={6} flexDirection='column'>
        <Separator height={32} />

        <Image
          src='two-fingers-up-emoji.png'
          alt='Yellow hand emoji, in a 3D way, with two fingers up, like a cool greeting gesture.'
          sx={(theme): SystemStyleObject => ({ width: theme.spacing(16), height: theme.spacing(16) })}
        />

        <Separator height={4} />

        <Typography component='h1' color='primary' fontWeight={700} lineHeight='1.25' variant='h3'>
          Hey! My name's Jonathan Seibt, and I'm a Senior Front End Engineer.
        </Typography>

        <Separator height={4} />

        <Typography component='h2' color='primary' fontWeight={400} lineHeight='1.75' variant='body1'>
          From Caxias do Sul - RS - Brazil to the world. Since 1996 into life. Since 2007 into technology. Since 2014 into business.
        </Typography>

        <Separator height={16} />

        <Typography component='h3' color='primary' fontWeight={500} lineHeight='1.75' variant='h5'>
          Hey, how's it going? I'm really happy to have you here! I'm sure I'd like to get to know you better too. Please, feel free to get in touch and connect with me through{" "}
          <Typography component={ExternalLink} href='https://www.linkedin.com/in/jonathanseibt' fontWeight={700} fontSize='inherit'>
            LinkedIn
          </Typography>
          . There you can find out more about me too, and we can have a good virtual coffee together. What do you think?
        </Typography>

        <Separator height={32} />
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

export default IndexPage;
