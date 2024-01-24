import { MainPageDiv, MobileImgDiv, MobileImg } from './HomePageStyle'
import { useState, useEffect } from 'react'
import HomeBackImg from '../assets/images/HomeBackImg.png'
import LoginHeader from '../components/moduleComponents/LoginHeader/index'
import LoginMain from '../components/moduleComponents/LoginMain/index'

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const regex = /^[가-힣a-zA-Z0-9]+$/ //가-힣 한글, a-zA-Z 영어, 0-9 숫자

  const baseUrl = 'https://openmind-api.vercel.app/3-4/subjects/?limit=1000'

  const handleLoginToggle = async (e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      if (inputValue.length >= 2 && regex.test(inputValue)) {
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
      <LoginHeader />
      <LoginMain
        isLoggedIn={isLoggedIn}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onLoginToggle={handleLoginToggle}
      />
      <MobileImgDiv>
        <MobileImg src={HomeBackImg} alt='HomeBackImg' />
      </MobileImgDiv>
    </MainPageDiv>
  )
}

export default HomePage
