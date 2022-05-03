import React from 'react';
import {
  StyledContainer,
  StyledButton,
  StyledCard,
  StyledRow,
  StyledCardImg,
  StyledCardBody,
  StyledCardText,
  Title,
} from './styles';

export default function Main() {
  return (
    <StyledContainer>
      <Title>Movie Now</Title>
      <StyledRow>
        <StyledCard>
          <StyledCardImg
            variant="top"
            src="https://i.pinimg.com/236x/80/10/ba/8010ba680f4d0d19ab2045232fd6470c.jpg"
          />
          <StyledCardBody>
            <StyledCard.Title>Card Title</StyledCard.Title>
            <StyledCardText>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </StyledCardText>
            <StyledButton variant="outline-dark">Go somewhere</StyledButton>
          </StyledCardBody>
        </StyledCard>
      </StyledRow>
    </StyledContainer>
  );
}
