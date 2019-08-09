import React from "react";
import { Card } from "semantic-ui-react";

export default function DataCard({ foo }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{foo.name}</Card.Header>
        <Card.Meta>{foo.course}</Card.Meta>
        <Card.Description>{foo.technique}</Card.Description>
      </Card.Content>
    </Card>
  );
}
