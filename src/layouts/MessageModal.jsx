import React from "react";
import { Header, Icon, Modal } from "semantic-ui-react";

export default function MessageModal({ onClose, onOpen, open, content }) {
  return (
    <Modal
      basic
      dimmer
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      size="small"
    >
      <Header icon as="h2" className="orbiton">
        <Icon name="check circle outline" />
        {content}
      </Header>
    </Modal>
  );
}
