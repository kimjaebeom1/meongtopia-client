import styled from "@emotion/styled";
import { ArrowUpOutlined } from "@ant-design/icons";

const Button = styled.button`
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: lightgray, 0.1;
  border-radius: 100%;
  position: fixed;
  /* top: 10px; */
  right: 50px;
  bottom: 40px;
  border: none;

  :hover {
    background-color: #f5cf1f;
  }
`;

const onClickScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Scroll() {
  return (
    <Button onClick={onClickScroll}>
      <ArrowUpOutlined />
    </Button>
  );
}
