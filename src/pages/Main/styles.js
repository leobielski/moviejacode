import styled from 'styled-components';
import { Container, Card, Row, Button } from 'react-bootstrap';

export const Title = styled.h1`
  color: #fff;
  fontfamily: ubuntu;
  margintop: 20px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 250px;
  margin: 10px;
`;

export const StyledContainer = styled(Container)`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`;

export const StyledRow = styled(Row)`
  display: 'flex';
  justify-content: 'center';
`;

export const StyledCardImg = styled(Card.Img)`
  width: 200px;
  height: 300px;
  align-self: center;
  padding-top: 20px;
  cursor: pointer;
`;

export const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCardText = styled(Card.Text)`
  font-size: 12px;
`;
