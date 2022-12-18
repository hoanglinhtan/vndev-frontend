import useSubdomain from '../hooks/useSubdomain';
import styled from 'styled-components';
import BlockbusterApp from './pages/BlockbusterApp';
import Welcome from './welcome';

const StyledApp = styled.div``;

export function App() {
  const [subdomain] = useSubdomain();

  const renderBySubDomain = (sub: string) => {
    switch (sub) {
      case 'blockbuster':
        return <BlockbusterApp></BlockbusterApp>;
      default:
        return <div>This page is in development</div>;
    }
  };

  return (
    <StyledApp>
      {subdomain ? renderBySubDomain(subdomain) : <Welcome title="test" />}
    </StyledApp>
  );
}

export default App;
