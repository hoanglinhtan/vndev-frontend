import styled from 'styled-components';
import TestCard from './TestCard';

const StyledDiv = styled.div``;
const StyledDivRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export function BlockbusterApp() {
  return (
    <StyledDiv>
      <StyledDivRow>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </StyledDivRow>
      <StyledDivRow>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </StyledDivRow>
      <StyledDivRow>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </StyledDivRow>
      <StyledDivRow>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </StyledDivRow>
      <StyledDivRow>
        <TestCard></TestCard>
        <TestCard></TestCard>
      </StyledDivRow>
    </StyledDiv>
  );
}

export default BlockbusterApp;
