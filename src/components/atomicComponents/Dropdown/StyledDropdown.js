import styled from 'styled-components'

export const Button = styled.button`
  all: unset;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isOpen ? '#000000' : '#818181')};
  border: 1px solid ${(props) => (props.isOpen ? '#000000' : '#818181')};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  p:first-child {
    margin-right: 4px;
  }
`
export const Div = styled.div`
  width: 80px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-top: 4px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`
export const DropdownMenu = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;

  &:hover {
    color: #1877f2;
  }
`
