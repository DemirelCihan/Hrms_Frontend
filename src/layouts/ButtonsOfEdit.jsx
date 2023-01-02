import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Grid, GridColumn } from "semantic-ui-react";

export default function ButtonsOfEdit(
  content,
  firstIcon,
  secondIcon,
  firstTo,
  secondTo
) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="12">
          <Button
            circular
            compact
            basic
            disabled
            fluid
            color="black"
            content={content}
          />
        </Grid.Column>
        <Grid.Column width="4">
          <Button
            circular
            compact
            floated="right"
            color="yellow"
            icon={firstIcon}
            as={NavLink}
            to={firstTo}
          />
          <Button
            circular
            compact
            floated="right"
            color="red"
            icon={secondIcon}
            as={NavLink}
            to={secondTo}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
