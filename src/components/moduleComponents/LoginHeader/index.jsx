import { MainDiv, ButtonDiv, LogoImg } from '../../../pages/HomePageStyle'
import { ReplyButton } from '../../atomicComponents/buttonComponent/ReplyButton'
import { Link } from 'react-router-dom'
import mainLogo from '../../../assets/images/mainLogo.svg'

const LoginHeader = ({ userStorageId }) => {
  const handleAskQuestion = () => {
    if (!userStorageId) {
      alert('로그인이 필요합니다.')
    }
  }

  return (
    <MainDiv>
      <ButtonDiv>
        <Link to={userStorageId ? '/list' : '#'}>
          <ReplyButton onClick={handleAskQuestion}>질문하러 가기</ReplyButton>
        </Link>
      </ButtonDiv>
      <LogoImg src={mainLogo} alt='mainLogo' />
    </MainDiv>
  )
}

export default LoginHeader
