import React from "react";
import { Container } from "semantic-ui-react";
import Headline from "./Headline";
import EmployerList from "../pages/EmployerList";
export default function EmployerLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Employers" />

        <EmployerList />
      </Container>
    </div>
  );
}
