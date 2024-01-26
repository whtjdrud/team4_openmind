import styled from 'styled-components'

const StyledListHeader = styled.header`
  display: flex;
  margin: 40px auto;
  padding: 0 50px;
  justify-content: space-between;

  .logo-img {
    width: 146px;
    height: 54px;
  }
  .profile-box {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  @media only screen and (max-width: 376px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export default StyledListHeader
