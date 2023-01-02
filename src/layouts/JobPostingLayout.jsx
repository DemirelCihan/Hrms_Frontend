import React from "react";
import { Container } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import Headline from "./Headline";

export default function JobPostingLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Job Postings" />

        <JobPostingList type="filtered" itemsPerRow="2" />
      </Container>
    </div>
  );
}
