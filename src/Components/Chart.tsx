import styled from "styled-components";
import Row from "./Row";
import { useEffect, useState } from "react";
import axios from "axios";
import Chartypes from "../../types";

export default function Chart(): JSX.Element {
  const [rowData, setRowData] = useState<Chartypes[]>([]);

  useEffect(() => {
    const chartData = async () => {
      try {
        const response = await axios.get("../../public/data.json");
        const data = response.data;
        setRowData(data);
      } catch (error) {}
    };

    chartData();
  }, []);

  const numbers: number[] = [
    rowData[0]?.amount,
    rowData[1]?.amount,
    rowData[2]?.amount,
    rowData[3]?.amount,
    rowData[4]?.amount,
    rowData[5]?.amount,
    rowData[6]?.amount,
  ];

  const maxNumber = Math.max(...numbers);

  return (
    <Container>
      <h1>Spending - Last 7 days</h1>
      <div className="rowContainer">
        <Row rowData={rowData} maxNumber={maxNumber} index={0} />
        <Row rowData={rowData} maxNumber={maxNumber} index={1} />
        <Row rowData={rowData} maxNumber={maxNumber} index={2} />
        <Row rowData={rowData} maxNumber={maxNumber} index={3} />
        <Row rowData={rowData} maxNumber={maxNumber} index={4} />
        <Row rowData={rowData} maxNumber={maxNumber} index={5} />
        <Row rowData={rowData} maxNumber={maxNumber} index={6} />
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

  .rowContainer {
    display: flex;
    width: 100%;
    height: 150px;
    justify-content: space-between;
    gap: 12px;
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

  @media (min-width: 1024px) {
    max-width: 540px;
    border-radius: 20px;
    padding: 32px 40px;

    .rowContainer {
      gap: 17px;
    }

    h1 {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 66px;
    }

    div {
      div {
        h2 {
          font-size: 18px;
          line-height: 23px;
        }

        h3 {
          font-size: 48px;
          line-height: 62px;
        }

        h4 {
          font-size: 18px;
          line-height: 23px;
        }

        h5 {
          font-size: 18px;
          line-height: 23px;
        }
      }
    }
  }
`;
