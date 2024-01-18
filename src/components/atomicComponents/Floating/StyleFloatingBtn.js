import styled from 'styled-components'

const StyleFloatingBtn = styled.button`
  width: ${(props) => props.width};
  height: 54px;
  padding: 12px 24px;
  color: var(--Grayscale10, #fff);
  background-color: var(--Brown40, #542f1a);
  border-radius: 200px;
  box-shadow: var(--shadow-medium, 0px 4px 4px 0px rgba(0, 0, 0, 0.25));
  border: none;
  font-size: 20px;
  font-weight: 400;
  font-family: Pretendard;
`
export default StyleFloatingBtn
