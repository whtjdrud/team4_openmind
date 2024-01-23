import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

export const TextAreaInput = styled.input`
  display: flex;
  height: 186px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Grayscale-20, #f9f9f9);

  &:placeholder {
    flex: 1 0 0;
    align-self: stretch;
    color: var(--Grayscale-40, #818181);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 137.5%;
  }
`
export const Text = styled.span`
  color: var(--Grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`
export const Button = styled.button`
  display: flex;
  height: 46px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brown-40, #542f1a);
  &:disabled {
    background: var(--Brown-30, #c7bbb5);
  }
`
