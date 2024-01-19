import { styled } from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  cursor: unset;
`

export const AnsweredButton = styled(Button)`
  border: 1px solid var(--Brown40);
  color: var(--Brown40);
`
export const UnansweredButton = styled(Button)`
  border: 1px solid var(--Grayscale40);
  color: var(--Grayscale40);
`
