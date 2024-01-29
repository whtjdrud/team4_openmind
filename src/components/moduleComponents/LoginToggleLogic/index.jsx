import { getUserApi, createUserApi } from '../../../api/HomePageApi'
import { useState, useEffect } from 'react'

const LoginToggleLogic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // isLoggedIn이 true면 로그인 상태, false면 로그아웃 상태
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

export default LoginToggleLogic
