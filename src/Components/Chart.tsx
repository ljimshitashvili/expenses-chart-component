import styled from "styled-components";

export default function Chart() {
  return (
    <Container>
      <h1>Spending - Last 7 days</h1>
      <ChartDiv></ChartDiv>
      <div className="dayContainer">
        <p>mon</p>
        <p>tue</p>
        <p>wed</p>
        <p>thu</p>
        <p>fri</p>
        <p>sat</p>
        <p>sun</p>
      </div>
      <hr />
      <div>
        <div>
          <h2>Total this month</h2>
          <h3>$478.33</h3>
        </div>
        <div>
          <h4>+2.4%</h4>
          <h5>from last month</h5>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 343px;
  padding: 24px 20px;
  background: #fffbf6;
  border-radius: 10px;

  .dayContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 11px;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #92857a;
    }
  }

  hr {
    width: 100%;
    height: 2px;
    border-radius: 1px;
    margin: 24px 0;
    background-color: #f8e9dd;
    border: none;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #382314;
    margin-bottom: 52px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: end;
    div {
      display: block;

      h2 {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        color: #92857a;
      }

      h3 {
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
        color: #382314;
      }

      h4 {
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        color: #382314;
      }

      h5 {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        color: #92857a;
      }
    }
  }
`;

const ChartDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  gap: 12px;
`;
