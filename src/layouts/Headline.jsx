import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

export default function Headline() {
  return (
    <Container className="headline">
      <Segment basic>
        <Header color="violet" as="h4" textAlign="right"></Header>
      </Segment>
      <Segment basic size="tiny" color="yellow" />
    </Container>
  );
}
