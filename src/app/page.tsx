import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // return <main className={styles.main}>LINKページ仮サイト</main>;
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
          }}
          href="https://www.swimu.net/"
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
          }}
          href="https://www.swimu.net/"
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
          }}
          href="https://www.swimu.net/"
        >
          <Typography className={exo_2.className} sx={{ fontSize: "20px" }}>
            Misskey.io
          </Typography>
        </Button>
      </Grid>
    </Grid>
    // <Stack spacing={2}>
    //   <Typography>swimu</Typography>
    //   <Button
    //     variant="outlined"
    //     startIcon={<WebIcon />}
    //     href="https://www.swimu.net/"
    //   >
    //     blog
    //   </Button>
    //   <Button
    //     variant="outlined"
    //     startIcon={<HomeIcon />}
    //     href="https://twitter.com/swimuuu/"
    //   >
    //     Twitter
    //   </Button>
    //   <Button
    //     variant="outlined"
    //     // startIcon={<MisskeyIcon />}
    //     href="https://misskey.io/@swimu/"
    //   >
    //     misskey.io
    //   </Button>
    //   <Button variant="contained" endIcon={<SendIcon />}>
    //     Send
    //   </Button>
    // </Stack>
  );
}
