import styled from 'styled-components'

const Icon = styled.img`
  width: 18px;
  height: 18px;
`
const Text = styled.span`
  color: var(--Grayscale10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 137.5%;
`
const AskStyledButton = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: var(--Brown-40, #542f1a);

  &:hover {
    border: 2px solid var(--Brown-50, #341909);
  }
  &:active {
    background: var(--Brown-50, #341909);
  }
  &:disabled {
    background: var(--Brown-30, #c7bbb5);
    &:hover {
      border: none;
    }
  }

  @media only screen and (max-width: 375px) {
    padding: 8px 12px;
  }
`
const ReplyStyledButton = styled(AskStyledButton)`
  background: var(--Brown-10, #f5f1ee);
  border: 2px solid transparent;
  gap: 10px;

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-family: Actor;
    font-weight: 400;
  }

  ${Icon} {
    color: #542f1a;
  }

  &:hover {
    border: 2px solid var(--Brown-40, #542f1a);
    background: var(--Brown-10, #f5f1ee);
  }
  &:active {
    background: var(--Brown-20, #e4d5c9);
  }
  &:disabled {
    border: 2px solid var(--Brown-30, #c7bbb5);
    background: var(--Brown-10, #f5f1ee);
    &:hover {
      border: 2px solid var(--Brown-30, #c7bbb5);
    }
  }
`

export { Icon, Text, AskStyledButton, ReplyStyledButton }
