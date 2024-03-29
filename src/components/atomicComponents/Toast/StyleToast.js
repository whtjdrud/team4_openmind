import styled from 'styled-components'

export const ToastBox = styled.div`
  position: relative;
`

export const ToastDiv = styled.span`
  width: 167px;
  position: absolute;
  top: 0.5rem;
  left: -8rem;
  padding: 12px 20px;
  background-color: var(--Grayscale-60, #000);
  color: var(--Grayscale-10, #fff);
  border-radius: 8px;
  box-shadow: var(--shadow-medium, 0px 4px 4px 0px rgba(0, 0, 0, 0.25));
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  // 애니메이션
  animation: fadeout 5s;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
