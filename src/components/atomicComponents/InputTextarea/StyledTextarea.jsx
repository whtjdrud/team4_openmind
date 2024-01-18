import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 16px;
  color: var(--Grayscale40, #818181);
  border: none;
  outline: none;
  resize: none;
  border-radius: 8px;
  background: var(--Grayscale20, #f9f9f9);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  &:focus {
    border: 1px solid var(--Brown40, #542f1a);
  }

  &:not(:focus) {
    color: var(--Grayscale60, #000);
  }
`

export default StyledTextarea
