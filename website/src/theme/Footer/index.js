/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/" style={{ textDecoration: 'none' }}>
        ArdaCraft
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const {footer} = useThemeConfig();

  if (!footer) {
    return null;
  }

  return (
    <footer>
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}

    >
      <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              ArdaCraft
            </Typography>
            <ul>
                <li>
                  <Link href="https://ardacraft.me" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="https://forums.ardacraft.me" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="https://wiki.ardacraft.me" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/fykFabG" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://patreon.com/ardacraft/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Patreon
                  </Link>
                </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            <ul>
                <li>
                  <Link href="https://ardacraft.me/modpack" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Modpack
                  </Link>
                </li>
                <li>
                  <Link href="https://ardacraft.me/map" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Map
                  </Link>
                </li>
                <li>
                  <Link href="https://ardacraft.me/about" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://ardacraft.me/faq" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    FAQ
                  </Link>
                </li>
              </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Social
            </Typography>
            <ul>
                <li>
                  <Link href="https://twitter.com/ArdaCraft_/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com/ardacraft/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/c/ardacraftmc/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="https://reddit.com/r/ardacraft/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Reddit
                  </Link>
                </li>
                <li>
                  <Link href="https://planetminecraft.com/server/ardacraft-3119330/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Planet Minecraft
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/ardacraft/" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    GitHub
                  </Link>
                </li>
              </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <ul>
                <li>
                  <Link href="https://ardacraft.me/privacy" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://ardacraft.me/rules" target="_blank" variant="subtitle1" color="text.secondary" rel={"noopener"} style={{ textDecoration: 'none' }}>
                    Rules
                  </Link>
                </li>
              </ul>
          </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
      </div>
    </footer>
  );
}

export default Footer;
