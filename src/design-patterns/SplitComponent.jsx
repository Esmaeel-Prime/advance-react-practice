import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: lightblue;
`;
const Panel = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SplitComponent = ({ Left, Right }) => {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>
      <Panel>
        <Right />
      </Panel>
    </Container>
  );
};
