import styled from "@emotion/styled";

const Wrap = styled.div`
  overflow: scroll;
  scroll-snap-type: y mandatory;

  width: 100%;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Child = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
`;

export default function test2() {
  return (
    <Wrap>
      <Child style={{ backgroundColor: "red" }}>1</Child>
      <Child style={{ backgroundColor: "blue" }}>2</Child>
      <Child style={{ backgroundColor: "yellow" }}>3</Child>
      <Child style={{ backgroundColor: "pink" }}>4</Child>
      <Child style={{ backgroundColor: "lightgray" }}>5</Child>
    </Wrap>
  );
}
