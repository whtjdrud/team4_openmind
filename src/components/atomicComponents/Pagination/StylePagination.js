import styled from 'styled-components'

export const PaginationBox = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const PageButton = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: ${({ $clicked }) => ($clicked ? '2.3rem' : '2rem')};
  font-family: Actor;
  line-height: 25px;
  color: ${({ $clicked }) => ($clicked ? 'var(--Brown50)' : 'var(--Grayscale40)')};
`
