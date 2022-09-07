import styled from "@emotion/styled";

interface IisActiveProps {
  isActive: boolean;
}

export const Menu = styled.li`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: ${(props: IisActiveProps) => (props.isActive ? "#F5CF1F" : "#000")};
  cursor: pointer;
  :hover {
    color: #f5cf1f;
  }
`;
