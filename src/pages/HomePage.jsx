import { MainPageDiv, MobileImgDiv, MobileImg } from './HomePageStyle'
import { useState, useEffect } from 'react'
import HomeBackImg from '../assets/images/HomeBackImg.png'
import LoginHeader from '../components/moduleComponents/LoginHeader/index'
import LoginMain from '../components/moduleComponents/LoginMain/index'
import { getUserApi, createUserApi } from '../api/HomePageApi'

const HomePages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const regex = /^[가-힣a-zA-Z0-9]+$/ // 가-힣 한글, a-zA-Z 영어, 0-9 숫자
  const userStorageId = localStorage.getItem('userId')

  const handleLoginToggle = async (e) => {
    e.preventDefault()
    if (!isLoggedIn) {
      if (inputValue.length >= 2 && regex.test(inputValue)) {
        try {
          let user = await getUserApi(inputValue)
          if (user) {
            setIsLoggedIn(true)
            setInputValue(user.name)
          } else {
            const newUser = await createUserApi(inputValue)
            setIsLoggedIn(true)
            user = newUser
          }
          localStorage.setItem('userId', user.id)
          localStorage.setItem('userName', user.name)
        } catch (error) {
          console.error(error)
        }
      }
    } else {
      localStorage.removeItem('userId')
      localStorage.removeItem('userName')
      setIsLoggedIn(false)
      setInputValue('')
    }
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      setIsLoggedIn(true)
      setInputValue(localStorage.getItem('userName'))
    }
  }, [])
  return { isLoggedIn, inputValue, userStorageId, setInputValue, handleLoginToggle }
}

const HomePage = () => {
  const { isLoggedIn, inputValue, userStorageId, setInputValue, handleLoginToggle } = HomePages()
  return (
    <MainPageDiv>
      <LoginHeader userStorageId={userStorageId} />
      <LoginMain
        isLoggedIn={isLoggedIn}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={handleLoginToggle}
        userStorageId={userStorageId}
      />
      <MobileImgDiv>
        <MobileImg src={HomeBackImg} alt='HomeBackImg' />
      </MobileImgDiv>
    </MainPageDiv>
  )
}

export default HomePage
