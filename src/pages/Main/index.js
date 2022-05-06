import { collection, getDocs } from 'firebase/firestore/lite';
import React, { useEffect } from 'react';
import db from '../../services/firebase';
import {
  StyledButton,
  StyledCard,
  StyledCardBody,
  StyledCardImg,
  StyledCardText,
  StyledContainer,
  StyledRow,
  Title,
} from './styles';

export default function Main() {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    async function loadMovies() {
      const moviesCol = collection(db, 'movies');
      const moviesSnapshot = await getDocs(moviesCol);
      const moviesList = moviesSnapshot.docs.map((doc) => doc.data());
      setMovies(moviesList);
    }

    loadMovies();
    console.log(movies);
  }, []);

  return (
    <StyledContainer>
      <Title>Movie Now</Title>
      <StyledRow>
        {movies.map((movie) => (
          <StyledCard key={movie.id}>
            <StyledCardImg variant="top" src={movie.url_picture} />
            <StyledCardBody>
              <StyledCard.Title>{movie.name}</StyledCard.Title>
              <StyledCardText>{movie.description}</StyledCardText>
              <StyledButton variant="outline-dark">Watch Now</StyledButton>
            </StyledCardBody>
          </StyledCard>
        ))}
      </StyledRow>
    </StyledContainer>
  );
}
