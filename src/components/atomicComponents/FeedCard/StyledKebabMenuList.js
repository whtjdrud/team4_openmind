import styled from 'styled-components'
import { ReactComponent as KebabIcon } from '../../../assets/images/More.svg'

export const Ul = styled.ul`
  position: absolute;
  width: 90px;
  margin-top: 2px;
  padding: 4px 0px;
  border-radius: 8px;
  border: 1px solid var(--Grayscale30);
  background-color: var(--Grayscale10);
  box-shadow: var(--shadow-small);
  z-index: 1;
`

export const Button = styled.button`
  align-self: stretch;
  width: 100%;
  padding: 6px 16px;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: ${({ $select }) => ($select === 'true' ? `var(--Blue50)` : `var(--Grayscale50)`)};
  color: ${({ $actionType }) => $actionType === 'delete' && `var(--Red50)`};
  cursor: pointer;

  &:hover {
    background-color: var(--Grayscale20);
  }
`

export const Container = styled.div`
  position: relative;
`

export const Kebab = styled(KebabIcon)`
  cursor: pointer;
`
