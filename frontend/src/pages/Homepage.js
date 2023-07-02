import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CandidateCard from "../components/CandidateCard";

export default function Homepage() {
  return (
    <Container>
      <Grid container direction={"column"}>
        <Typography>Daftar Kandidat</Typography>
        <Grid container direction={"row"}>
          <Grid item sm="4">
            <CandidateCard />
          </Grid>
          <Grid item sm="4">
            <CandidateCard />
          </Grid>
          <Grid item sm="4">
            <CandidateCard />
          </Grid>
          <Grid item sm="4">
            <CandidateCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
