import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

export default function CardOfConfirm(header, confirm, unconfirm, view) {
  return (
    <Card raised fluid>
      <Card.Content>
        <Ca content={header} className="montserrat" />
      </Card.Content>
      <Card.Content>
        <Button
          circular
          compact
          color="green"
          icon="check"
          floated="right"
          onClick={confirm}
        />

        <Button
          circular
          compact
          color="blue"
          icon="delete"
          floated="right"
          onClick={unconfirm}
        />

        <Button
          circular
          compact
          color="red"
          content="View"
          as={NavLink}
          to={view}
        />
      </Card.Content>
    </Card>
  );
}
