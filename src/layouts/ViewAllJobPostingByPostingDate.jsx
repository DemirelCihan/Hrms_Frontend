import React from "react";
import {
  Container,
  Grid,
  GridRow,
  Reveal,
  Image,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function ViewAllJobPostingByPostingDate() {
  return (
    <Container className="view-all-job-posting-by-posting-date">
      <Grid>
        <GridRow centered>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="small" src="" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image circular size="small" src="" />
            </Reveal.Content>
          </Reveal>
        </GridRow>
        <GridRow centered>
          <Button
            circular
            color="yellow"
            as={NavLink}
            to={"/jobPostings"}
            content="View All Job Postings by Posting Date"
          />
        </GridRow>
      </Grid>
    </Container>
  );
}
