import styled from 'styled-components';
import { Router } from './layout/sections/Router';


function App() {
    return (
        <StyledApp >
            <Router />
        </StyledApp>
    );
}

const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default App;

