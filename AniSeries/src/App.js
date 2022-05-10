
import LandingPage from './pages/LandingPage/LandingPage'
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.countColumns || 37}, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 0px;
`;

function App() {
  return (
    <LandingPage />
  );
}

export default App;
