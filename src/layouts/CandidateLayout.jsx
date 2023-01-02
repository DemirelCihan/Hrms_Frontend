import React from "react";
import { Container } from "semantic-ui-react";
import Headline from "./Headline";
import CandidateList from "../pages/CandidateList";

export default function CandidateLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Candidates" />
        <CandidateList />
      </Container>
    </div>
  );
}
