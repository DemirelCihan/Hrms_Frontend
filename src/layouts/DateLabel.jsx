import React from "react";
import { Grid, GridColumn, GridRow, Label } from "semantic-ui-react";

export default function DateLabel({ value }) {
  return (
    <span className="date">
      <Label circular basic color="yellow">
        <Grid>
          <GridRow>
            <GridColumn width="2" />
            <GridColumn width="12">
              <span className="orbitron">{value}</span>
            </GridColumn>
            <GridColumn width="2" />
          </GridRow>
        </Grid>
      </Label>
    </span>
  );
}
