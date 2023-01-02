import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Modal,
  ModalActions,
  Segment,
} from "semantic-ui-react";
export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };
  return (
    <span>
      <Button
        circular
        color="orange"
        content="Sign up"
        onClick={() => handleModal(true)}
      />

      <Modal
        basic
        dimmer
        onClose={() => handleModal(false)}
        onOpen={() => handleModal(true)}
        open={open}
        size="small"
      >
        <Header icon as="h2" className="orbitron">
          <Icon name="paper plane" />
          What type of account to you want to create ?
        </Header>

        <ModalActions>
          <Grid>
            <GridRow>
              <GridColumn width="7">
                <Button
                  circular
                  fluid
                  color="green"
                  content="Candidate"
                  as={NavLink}
                  to={"/candidate/add"}
                  onClick={() => setOpen(false)}
                />
              </GridColumn>
              <GridColumn width="2">
                <Segment basic className="or">
                  or
                </Segment>
              </GridColumn>
              <GridColumn width="7">
                <Button
                  circular
                  fluid
                  color="blue"
                  content="Employer"
                  as={NavLink}
                  to={"/employer/add"}
                  onClick={() => setOpen(false)}
                />
              </GridColumn>
            </GridRow>
          </Grid>
        </ModalActions>
      </Modal>
    </span>
  );
}
