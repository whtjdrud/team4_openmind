import mainLogo from '../assets/images/mainLogo.svg'
import { ReplyButton } from '../components/atomicComponents/buttonComponent/ReplyButton'
import { AskButton } from '../components/atomicComponents/buttonComponent/AskButton'
import { MainPageDiv, MainDiv, ButtonDiv, LogoImg, Inputdiv, LoginText, MobileImgDiv, MobileImg } from './HomePageStyle'
import InputField from '../components/atomicComponents/InputField/index'
import HomeBackImg from '../assets/images/HomeBackImg.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const baseUrl = 'https://openmind-api.vercel.app/3-4/subjects/?limit=1000'

  const handleLoginToggle = async () => {
    if (!isLoggedIn) {
      try {
        const response = await fetch(baseUrl)
        const data = await response.json()
        let user = data.results.find((item) => item.name === inputValue) // 입력값과 동일한 이름을 가진 사용자를 찾음
        if (user) {
          setIsLoggedIn(true) // 사용자가 존재하면 로그인 상태로 설정
          setInputValue(user.name) // 입력값을 사용자 이름으로 설정
        } else {
          const newUserResponse = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: inputValue }),
          })
          const newUser = await newUserResponse.json()
          user = newUser
        }
        localStorage.setItem('userId', user.id)
        localStorage.setItem('userName', user.name)
        setIsLoggedIn(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      setIsLoggedIn(false)
    }
  }

  useEffect(() => {
    // 페이지가 로드될 때 로컬 스토리지에서 로그인 정보를 확인하여 상태를 업데이트
    const userId = localStorage.getItem('userId')
    if (userId) {
      setIsLoggedIn(true)
      setInputValue(localStorage.getItem('userName'))
    }
  }, [])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <MainPageDiv>
      <MainDiv>
        <ButtonDiv>
          <Link to='/list'>
            <ReplyButton>질문하러 가기</ReplyButton>
          </Link>
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
