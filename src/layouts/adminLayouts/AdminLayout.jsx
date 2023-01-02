import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";
import CompanyPersonnelUpdateButton from "../../pages/adminPages/CompanyPersonnelUpdateButton";
import Headline from "../Headline";

export default function AdminLayout() {
  let id = 1; // companyPersonnelId
  return (
    <div>
      <Container className="content">
        <Headline content="Admin Panel" />
        <Grid>
          <GridRow>
            <GridColumn width="3" />
            <GridColumn width="10">
              <CompanyPersonnelUpdateButton id={id} />
              <Button
                circular
                fluid
                color="yellow"
                content="Edit App Details"
                as={NavLink}
                to={"/adminPanel/edit"}
              />
              <br />
              <Button
                circular
                fluid
                color="yellow"
                content="Confirmations"
                as={NavLink}
                to={`/adminPanel/companyPersonnel/${id}/confirm`}
              />
            </GridColumn>
            <GridColumn width="3" />
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
