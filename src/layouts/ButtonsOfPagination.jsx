import React from "react";
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react";

export default function ButtonsOfPagination({
  previous,
  next,
  pageContent,
  pageSizeOne,
  pageSizeTwo,
  pageSizeThree,
  pageSizeFour,
  pageSizeContent,
}) {
  return (
    <Grid>
      <GridRow columns="2">
        <GridColumn textAlign="right">
          <Button
            circular
            compact
            basic
            disabled
            color="black"
            content={pageSizeContent}
          />
          <Button
            circular
            compact
            color="black"
            icon="genderless"
            onClick={pageSizeOne}
          />
          <Button
            circular
            compact
            color="violet"
            icon="genderless"
            onClick={pageSizeFour}
          />
        </GridColumn>
        <Grid.Column textAlign="left">
          <Button
            circular
            compact
            color="violet"
            icon="caret left"
            onClick={previous}
          />
          <Button
            circular
            compact
            basic
            disabled
            color="black"
            content={pageContent}
          />
          <Button
            circular
            compact
            color="violet"
            icon="caret right"
            onClick={next}
          />
        </Grid.Column>
      </GridRow>
    </Grid>
  );
}
