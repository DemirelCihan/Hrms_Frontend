import React from "react";
import { Button } from "semantic-ui-react";

export default function LinkedinButton({ url }) {
  return <Button circular compact icon="linkedin" href={url} target="blank" />;
}
