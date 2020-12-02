import React from "react";
import { Col, Row, Container } from "../components/Grid";
import NoMatchJumbotron from "../components/NoMatchJumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <NoMatchJumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </NoMatchJumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
