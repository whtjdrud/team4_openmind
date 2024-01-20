import mainLogo from '../assets/images/mainLogo.svg'
import { ReplyButton } from '../components/atomicComponents/buttonComponent/ReplyButton'
import { AskButton } from '../components/atomicComponents/buttonComponent/AskButton'
import { MainPageDiv, HeaderDiv, MainDiv, LogoImgDiv, LogoImg, Inputdiv } from './HomePageStyle'
import InputField from '../components/atomicComponents/InputField/index'

const HomePage = () => {
  return (
    <MainPageDiv>
      <HeaderDiv>
        <ReplyButton>질문하러 가기</ReplyButton>
      </HeaderDiv>
      <MainDiv>
        <LogoImgDiv>
          <LogoImg src={mainLogo} alt='mainLogo' />
          <Inputdiv>
            <InputField />
            <AskButton>질문받기</AskButton>
          </Inputdiv>
        </LogoImgDiv>
      </MainDiv>
    </MainPageDiv>
  )
}

export default HomePage
