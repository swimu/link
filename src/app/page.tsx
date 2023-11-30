import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import icon from "../../public/ahiru-and-yui-round.png";

import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      spacing={1}
      sx={{ marginTop: "40px" }}
    >
      <Grid item xs={12}>
        <Image src={icon} alt="アイコン" width="70" height="70" />
      </Grid>
      <Grid item xs={12}>
        <Typography className={exo_2.className} sx={{ fontSize: "35px" }}>
          swimu
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        <Button
          sx={{
            borderRadius: "10px",
            display: "block",
            width: "200px",
            padding: "15px",
            boxSizing: "border-box",
            background: "#4c6cb3",
            color: "#FFF",
            textDecoration: "none",
            textAlign: "center",
            margin: "10px",
            textTransform: "none",
            hover: {
              background: "#4c6cb3",
            },
          }}
          href="https://www.swimu.net/"
        >
          <Typography className={exo_2.className} sx={{ fontSize: "20px" }}>
            Blog
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            borderRadius: "10px",
            display: "block",
            width: "200px",
            padding: "15px",
            boxSizing: "border-box",
            background: "#1da1f2",
            color: "#FFF",
            textDecoration: "none",
            textAlign: "center",
            margin: "10px",
            textTransform: "none",
            hover: {
              background: "#1da1f2",
            },
          }}
          href="https://twitter.com/swimuuu/"
        >
          <Typography className={exo_2.className} sx={{ fontSize: "20px" }}>
            Twitter
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            borderRadius: "10px",
            display: "block",
            width: "200px",
            padding: "15px",
            boxSizing: "border-box",
            background: "#CF2E92",
            color: "#FFF",
            textDecoration: "none",
            textAlign: "center",
            margin: "10px",
            textTransform: "none",
            hover: {
              background: "#CF2E92",
            },
          }}
          href="https://instagram.com/swimuuu/"
        >
          <Typography className={exo_2.className} sx={{ fontSize: "20px" }}>
            Instagram
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            borderRadius: "10px",
            display: "block",
            width: "200px",
            padding: "15px",
            boxSizing: "border-box",
            background: "#282C37",
            color: "#35c7e6",
            textDecoration: "none",
            textAlign: "center",
            margin: "10px",
            textTransform: "none",
            hover: {
              background: "#282C37",
            },
          }}
          href="https://misskey.io/@swimu/"
        >
          <Typography className={exo_2.className} sx={{ fontSize: "20px" }}>
            Misskey.io
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
