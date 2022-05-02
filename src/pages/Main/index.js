import React, { Component } from 'react';

import { Container, Card, Row, Col, Button } from 'react-bootstrap';

export default class Main extends Component {
  render() {
    return (
      <>
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
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdocplayer.nl%2F159044543-1-foodhallen-2-borrelen-3-feest-of-vergadering-4-onze-bars-5-foodstands.html&psig=AOvVaw2X2aLraV6ptZMs6ceXJBLN&ust=1651606299388000&source=images&cd=vfe&ved=2ahUKEwjmk8WHx8H3AhWOg5UCHbRuBLYQjRx6BAgAEAs"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}
