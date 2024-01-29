import { Inputdiv, LoginText, InputBox, AnswerButtonLink } from '../LoginToggleLogic/HomePageStyle'
import { AskButton } from '../../atomicComponents/buttonComponent/AskButton'
import InputField from '../../atomicComponents/InputField/index'
import { useState } from 'react'

const LoginMain = ({ isLoggedIn, inputValue, onClick, setInputValue, userStorageId }) => {
  const [disabled, setDisabled] = useState(!inputValue) // 로그인 버튼 비활성화

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setDisabled(e.target.value === '') // 인풋에 값이 없으면 로그인버튼 비활성화
  }

  return (
    <InputBox>
      <Inputdiv>
        {isLoggedIn ? (
          <>
            <LoginText>반가워요, {inputValue}님</LoginText>
            <AnswerButtonLink to={`/post/${userStorageId}/answer`}>
              <AskButton>질문받기</AskButton>
            </AnswerButtonLink>
          </>
        ) : (
          <InputField onChange={handleInputChange} /> // 로그인 상태가 아닐 때 InputField 표시
        )}
        <AskButton buttonOff={!isLoggedIn && !inputValue} onClick={onClick}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </AskButton>
      </Inputdiv>
    </InputBox>
  )
}

export default LoginMain
