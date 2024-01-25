import { MainDiv, ButtonDiv, LogoImg } from '../../../pages/HomePageStyle'
import { ReplyButton } from '../../atomicComponents/buttonComponent/ReplyButton'
import { Link } from 'react-router-dom'
import mainLogo from '../../../assets/images/mainLogo.svg'

const LoginHeader = () => {
  return (
    <MainDiv>
      <ButtonDiv>
        <Link to='/list'>
          <ReplyButton>질문하러 가기</ReplyButton>
        </Link>
      </ButtonDiv>
      <LogoImg src={mainLogo} alt='mainLogo' />
    </MainDiv>
  )
}

export default LoginHeader
