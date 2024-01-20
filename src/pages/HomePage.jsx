import mainLogo from '../assets/images/mainLogo.svg'
import { ReplyButton } from '../components/atomicComponents/buttonComponent/ReplyButton'
import { AskButton } from '../components/atomicComponents/buttonComponent/AskButton'
import { MainPageDiv, MainDiv, ButtonDiv, LogoImg, Inputdiv, MobileImgDiv, MobileImg } from './HomePageStyle'
import InputField from '../components/atomicComponents/InputField/index'
import HomeBackImg from '../assets/images/HomeBackImg.png'

const HomePage = () => {
  return (
    <MainPageDiv>
      <MainDiv>
        <ButtonDiv>
          <ReplyButton>질문하러 가기</ReplyButton>
        </ButtonDiv>
        <LogoImg src={mainLogo} alt='mainLogo' />
        <Inputdiv>
          <InputField />
          <AskButton>질문받기</AskButton>
        </Inputdiv>
      </MainDiv>
      <MobileImgDiv>
        <MobileImg src={HomeBackImg} alt='HomeBackImg' />
      </MobileImgDiv>
    </MainPageDiv>
  )
}

export default HomePage
