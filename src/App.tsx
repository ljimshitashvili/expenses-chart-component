import styled from "styled-components";
import Balance from "./Components/Balance";
import Chart from "./Components/Chart";

export default function App() {
  return (
    <Body>
      <Balance></Balance>
      <Chart></Chart>
    </Body>
  );
}

const Body = styled.div`
  background-color: #f8e9dd;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
