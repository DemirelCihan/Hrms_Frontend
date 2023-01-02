import React from "react";
import { Container } from "semantic-ui-react";
import Headline from "./Headline";
import JobPostingList from "../pages/JobPostingList";
export default function FavoriteJobPostingLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Favorite Job Postings" />

        <JobPostingList />
      </Container>
    </div>
  );
}
