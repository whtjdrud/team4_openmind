import styled from 'styled-components'

const FONT_COLOR = {
  false: `var(--Grayscale40)`,
  blue: `var(--Blue50)`,
}

export const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  p {
    color: ${({ $active }) => FONT_COLOR[$active] || 'var(--Grayscale40)'};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
`
