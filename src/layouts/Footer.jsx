import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider, Grid, Icon, List, Menu } from "semantic-ui-react";

export default function Footer() {
  return (
    <Container className="footer">
      <Divider />
      <br />

      <Menu fixed="bottom">
        <Grid>
          <Grid.Row centered>
            <List>
              <List.Item as={NavLink} to="/home">
                <List.Icon name="home" />
                <List.Content>Home</List.Content>
              </List.Item>

              <List.Item as={NavLink} to="/jobPostings">
                <List.Icon name="list alternate outline" />
                <List.Content>Job Posting</List.Content>
              </List.Item>

              <List.Item as={NavLink} to="/candidates">
                <List.Icon name="user outline" />
                <List.Content>Candidates</List.Content>
              </List.Item>

              <List.Item as={NavLink} to="/employers">
                <List.Icon name="building outline" />
                <List.Content>Employers</List.Content>
              </List.Item>

              <List.Item as={NavLink} to="/aboutUs">
                <List.Icon name="heart outline" />
                <List.Content>About Us</List.Content>
              </List.Item>
            </List>
          </Grid.Row>
          <Grid.Row centered> 2023 . Cihan Demirel</Grid.Row>
          <Grid.Row centered>
            <List link horizontal>
              <List.Item href="https://github.com/DemirelCihan" target="blank">
                <Icon name="github" size="large" />
              </List.Item>
              <List.Item
                href="https://www.linkedin.com/in/demirelcihan"
                target="blank"
              >
                <Icon name="linkedin" size="large" />
              </List.Item>
            </List>
          </Grid.Row>
        </Grid>
      </Menu>

      <br />
      <br />
      <br />
    </Container>
  );
}
