import styled from 'styled-components'

export const Button = styled.button`
  all: unset;
  color: ${(props) => (props.hated ? '#000000' : '#818181')};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;

  p {
    margin-left: 6px;
  }
`
