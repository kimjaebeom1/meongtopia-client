import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

interface IisActiveProps {
  isActive: boolean;
}

export const Menu = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;
  margin-right: 2rem;
  color: ${(props: IisActiveProps) => (props.isActive ? "orange" : "#000")};
  cursor: pointer;
  :hover {
    color: #f4840b;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    padding: 1rem;
    margin: 0;
    font-size: 1rem;
    border: 1px solid orange;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
