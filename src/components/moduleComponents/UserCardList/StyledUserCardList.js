import styled from 'styled-components'

const StyledUserCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(186px, 220px));
  grid-template-rows: repeat(2, 187px);
  gap: 20px;
  @media only screen and (max-width: 769px) {
    grid-template-columns: repeat(3, minmax(186px, 220px));
    grid-template-rows: repeat(3, 187px);
  }

  @media only screen and (max-width: 376px) {
    grid-template-columns: repeat(2, 156px);
    grid-template-rows: repeat(4, 168px);
    gap: 16px;
  }
`
export default StyledUserCardList
