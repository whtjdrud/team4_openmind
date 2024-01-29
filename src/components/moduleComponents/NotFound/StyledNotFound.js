import styled from 'styled-components'

export const StyledNotFound = styled.div`
  display: flex;
  width: 500px;
  margin: 100px auto;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  img {
    width: 300px;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: center;
    color: var(--Grayscale40, #818181);
  }

  .button-box {
    display: flex;
    gap: 32px;
  }

  button {
    width: 80px;
    height: 16px;
  }
`
