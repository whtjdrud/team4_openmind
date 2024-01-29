import { StyledLocalProfile } from './StyledLocalProfile'

const LocalProfile = ({ userImg, userName }) => {
  return (
    <StyledLocalProfile>
      <img alt='사용자 이미지' src={userImg} />
      <span>{userName}</span>
    </StyledLocalProfile>
  )
}

export default LocalProfile
