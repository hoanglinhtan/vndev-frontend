import styled from 'styled-components';
import CustomAppBar from './CustomAppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import DetailPage from './DetailPage';

const StyledDiv = styled.div``;

export function BlockbusterApp() {
  return (
    <StyledDiv>
      <BrowserRouter>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="detail/*" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </StyledDiv>
  );
}

export default BlockbusterApp;
