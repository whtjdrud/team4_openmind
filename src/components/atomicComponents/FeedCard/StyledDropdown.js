import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 20px;
  top: 10px;
`

export const Button = styled.button`
  all: unset;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isOpen ? 'var(--Grayscale60)' : 'var(--Grayscale40)')};
  padding: 7px 20px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;

  span:first-child {
    margin-right: 4px;
  }
`
export const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  background: var(--Grayscale10, #fff);
  width: 95px;
  border: 1px solid var(--Grayscale30);
  border-radius: 8px;
  margin-top: 0px;
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
