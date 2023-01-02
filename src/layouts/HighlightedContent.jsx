import React from "react";
import {
  Grid,
  Image,
  Divider,
  Segment,
  Header,
  Input,
} from "semantic-ui-react";

export default function HighlightedContent() {
  return (
    <Grid>
      <GridRow stretched columns="2">
        <GridColumn>
          <Image href="file:///C:/Users/heisenberg/Desktop/resume-length-how-long-should-your-resume-be.jpg" />
        </GridColumn>
        <GridColumn>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color="violet" textAlign="right">
              <span className="headline-1"> Find a new</span>
            </Header>
            <br />
            <Header color="pink" textAlign="rigth">
              <span className="headline-2">Job</span>
            </Header>
          </Segment>
          <Segment raised circular>
            <Input
              transparent
              type="text"
              icon="search"
              size="big"
              placeholder="Search. . ."
            />
          </Segment>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
