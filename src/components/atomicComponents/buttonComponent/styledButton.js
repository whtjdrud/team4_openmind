import styled from 'styled-components'

const Icon = styled.img`
  width: 18px;
  height: 18px;
`

const Text = styled.span`
  color: var(--text-color, #000); /* Default text color is black */
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 137.5%;
  transition: color 0.25s; /* Ensure smooth transition of text color */
`

const BaseButton = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: var(--Brown-10, #f5f1ee);
  position: relative;
  overflow: hidden;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%; /* Start position of the slide */
    width: 100%;
    height: 100%;
    background-color: var(--hover); /* Slide-in color */
    transition: left 0.3s ease; /* Slide effect duration */
    z-index: 0;
  }

  &:hover::before,
  &:focus::before {
    left: 0; /* Slide in the overlay from the left */
  }

  &:hover ${Text}, /* Target the Text component inside the button */
  &:focus ${Text} {
    color: #fff; /* Text turns white on hover */
  }

  &:hover,
  &:focus {
    border-color: var(--hover);
  }

  @media only screen and (max-width: 375px) {
    padding: 8px 12px;
  }
`

const AskStyledButton = styled(BaseButton)`
  --hover: var(--Brown-40, #542f1a); /* Hover color */

  &:hover,
  &:focus {
    border-color: var(--Brown-50, #341909);

    ${Text} {
      z-index: 1;
      color: #fff; /* Text turns white on hover */
    }
  }
`

const ReplyStyledButton = styled(BaseButton)`
  background: var(--Brown-10, #f5f1ee);

  ${Text} {
    color: var(--Brown-40, #542f1a); /* Brown text color */
    font-family: Actor;
    font-weight: 400;
    transition: color 0.25s;
  }

  &:hover,
  &:focus {
    border-color: var(--Brown-40, #542f1a);

    ${Text} {
      z-index: 1;
      color: #542f1a;
    }
  }
`

export { Icon, Text, AskStyledButton, ReplyStyledButton }
