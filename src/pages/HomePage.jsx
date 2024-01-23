import mainLogo from '../assets/images/mainLogo.svg'
import { ReplyButton } from '../components/atomicComponents/buttonComponent/ReplyButton'
import { AskButton } from '../components/atomicComponents/buttonComponent/AskButton'
import { MainPageDiv, MainDiv, ButtonDiv, LogoImg, Inputdiv, LoginText, MobileImgDiv, MobileImg } from './HomePageStyle'
import InputField from '../components/atomicComponents/InputField/index'
import HomeBackImg from '../assets/images/HomeBackImg.png'
import { useState } from 'react'

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const baseUrl = 'https://openmind-api.vercel.app/3-4/subjects/'
  const handleLoginToggle = async () => {
    try {
      if (!isLoggedIn) {
        // 로그인 상태가 아닐 때 POST 요청을 보내고 응답을 받음
        const response = await axios.post(baseUrl, {
          name: inputValue,
        })

        // 응답으로 받은 ID 값을 localStorage에 저장
        localStorage.setItem('userId', response.data.id)

        console.log(`환영합니다, ${inputValue}님`)
      } else {
        console.log(`로그아웃 되었습니다.`)
      }

      setIsLoggedIn(!isLoggedIn)
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  // const handleLoginToggle = () => {
  //   setIsLoggedIn(!isLoggedIn)
  // }

  const handleInputChange = (event) => {
    setInputValue(event.target.value) // 입력값을 inputValue 상태에 설정
  }

  return (
    <MainPageDiv>
      <MainDiv>
        <ButtonDiv>
          <ReplyButton onClick={onclick}>질문하러 가기</ReplyButton>
        </ButtonDiv>
        <LogoImg src={mainLogo} alt='mainLogo' />
        <Inputdiv>
          {isLoggedIn ? (
            <LoginText>반가워요, {inputValue}님</LoginText> // 로그인 상태일 때 텍스트 표시
          ) : (
            <InputField value={inputValue} onChange={handleInputChange} /> // 로그인 상태가 아닐 때 InputField 표시
          )}
          <AskButton onClick={handleLoginToggle}>{isLoggedIn ? '로그아웃' : '로그인'}</AskButton>
          <AskButton onClick={onclick}>질문받기</AskButton>
        </Inputdiv>
      </MainDiv>
      <MobileImgDiv>
        <MobileImg src={HomeBackImg} alt='HomeBackImg' />
      </MobileImgDiv>
    </MainPageDiv>
  )
}

export default HomePage
