import styled from "styled-components";
import Chartypes from "../../types";

interface Props {
  rowData: Chartypes[];
  index: number;
  maxNumber: number;
}

export default function Row({ rowData, index, maxNumber }: Props) {
  const height: number = (rowData[index]?.amount / maxNumber) * 150;

  return (
    <Container>
      <div
        className="row"
        style={{
          backgroundColor:
            rowData[index]?.amount === maxNumber ? "#B4E0E5" : "#EC755D",
          height: `${height}px`,
        }}
      >
        <div className="priceBox">
          <p>${rowData[index]?.amount}</p>
        </div>
      </div>
      <p>{rowData[index]?.day}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;

  .row {
    width: 33px;
    border-radius: 3px;
    height: 50px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #92857a;
  }

  .priceBox {
    display: none;
  }

  @media (min-width: 1024px) {
    gap: 8px;
    position: relative;
    cursor: pointer;

    .row {
      width: 50px;
      border-radius: 5px;
    }

    p {
      font-size: 15px;
      line-height: 20px;
    }

    :hover .priceBox {
      width: 71px;
      height: 40px;
      border-radius: 5px;
      background: #382314;
      display: block;
      position: absolute;
      left: -10.5px;
      top: -48px;

      p {
        font-weight: 700;
        font-size: 18px;
        line-height: 40px;
        color: #fffbf6;
      }
    }
  }
`;
