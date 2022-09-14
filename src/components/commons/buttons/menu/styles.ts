import styled from "@emotion/styled";

interface IisActiveProps {
  isActive: boolean;
}

export const Menu = styled.li`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: normal;
  margin-right: 2rem;
  color: ${(props: IisActiveProps) => (props.isActive ? "#F5CF1F" : "#000")};
  cursor: pointer;
  :hover {
    color: #f5cf1f;
  }
`;
