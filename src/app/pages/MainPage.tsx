import * as React from 'react';
import styled from 'styled-components';
import FilmCard from './FilmCard';
import { useNavigate } from 'react-router-dom';
import { useFilms } from './useFilms';

const StyledDivRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export function MainPage() {
  const { data } = useFilms();
  const navigate = useNavigate();

  const onCardClicked = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <React.Fragment>
      {data.films.map((v: any) => (
        <StyledDivRow>
          <FilmCard
            title={v.title}
            logo={v.logo}
            shortDesc={v.shortDesc}
            onClick={() => onCardClicked(v.id)}
          ></FilmCard>
        </StyledDivRow>
      ))}
    </React.Fragment>
  );
}

export default MainPage;
