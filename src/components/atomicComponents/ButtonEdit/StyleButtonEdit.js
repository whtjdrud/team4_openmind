import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 15px;
  max-width: 103px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--Grayscale30);
  background-color: var(--Grayscale10);
  box-shadow: var(--shadow-small);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: var(--Grayscale50);
  fill: var(--Grayscale50);

  &:hover {
    background-color: var(--Grayscale20);
    color: var(--Grayscale60);
    fill: var(--Grayscale60);
  }

  ${({ $isModify }) =>
    $isModify === true &&
    `
    background-color: var(--Grayscale10);
    color: var(--Blue50);
    fill: var(--Blue50);
  `}
`
