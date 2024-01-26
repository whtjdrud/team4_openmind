import styled from 'styled-components'

export const Button = styled.button`
  all: unset;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isOpen ? 'var(--Grayscale60)' : 'var(--Grayscale40)')};
  border: 1px solid ${(props) => (props.isOpen ? 'var(--Grayscale60)' : 'var(--Grayscale40)')};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  p:first-child {
    margin-right: 4px;
  }
`
export const Div = styled.div`
  z-index: 1;
  position: absolute;
  background: var(--Grayscale10, #fff);
  width: 80px;
  border: 1px solid var(--Grayscale30);
  border-radius: 8px;
  margin-top: 4px;
  cursor: pointer;
  box-shadow: var(--shadow-small);
`
export const DropdownMenu = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;

  &:hover {
    color: var(--Blue50);
  }
`
