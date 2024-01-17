import React from 'react'
import styled from 'styled-components'
import ARROW_IMG from '../../../assets/Icon/arrow-right.svg'

const Text = styled.span`
  color: var(--Grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`
const Button = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Brown-40, #542f1a);
  background: var(--Brown-40, #542f1a);
`

export const AskButton = () => {
  return (
    <Button>
      <img src={ARROW_IMG} alt='arrow' />
      <Text>추가하기</Text>
      <img src={ARROW_IMG} alt='arrow' />
    </Button>
  )
}
