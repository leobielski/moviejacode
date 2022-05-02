import React, { Component } from 'react';

import { Container, Card, Row, Button } from 'react-bootstrap';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container
        style={{
          paddingTop: '50',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '300',
        }}
      >
        <h1 style={{ color: '#fff', fontFamily: 'ubuntu', marginTop: 20 }}>
          Movie Now
        </h1>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ width: 250, margin: 10 }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/236x/80/10/ba/8010ba680f4d0d19ab2045232fd6470c.jpg"
              style={{
                width: 200,
                height: 300,
                alignSelf: 'center',
                paddingTop: 20,
                cursor: 'pointer',
              }}
            />
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Card.Title>Card Title</Card.Title>
              <Card.Text style={{ fontSize: 12 }}>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Button style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
