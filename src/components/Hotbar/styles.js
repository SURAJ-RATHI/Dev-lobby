import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  padding: 0.5rem;
  top: 0px;
  display: flex;
  gap: 0.25rem;
  left: 50%;
  transform: translate(-50%, 0px);
  z-index: 3;
  background: #fff;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;