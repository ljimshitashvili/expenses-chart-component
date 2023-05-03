import styled from "styled-components";

import icon from "../Images/logo.svg";

export default function Balance() {
  return (
    <Container>
      <div>
        <h1>My banalce</h1>
        <h2>$921.48</h2>
      </div>
      <img src={icon} alt="icon" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 343px;
  background: #ec755d;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #ffffff;
    }

    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 31px;
      color: #ffffff;
    }
  }
`;
