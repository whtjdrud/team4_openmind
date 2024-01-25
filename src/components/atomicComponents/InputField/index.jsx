import { useState } from 'react'
import * as Styled from './StyleInputField'

const InputField = ({ onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocusToggle = () => {
    setIsFocused(!isFocused)
  }

  return (
    <Styled.InputFieldBox focused={isFocused}>
      <Styled.PersonImg />
      <Styled.InputField
        onFocus={handleFocusToggle}
        onBlur={handleFocusToggle}
        onChange={onChange}
        placeholder='이름을 입력하세요'
        value={value}
        maxLength={7}
      />
    </Styled.InputFieldBox>
  )
}

export default InputField

// onChange, value를 props로 받아서 사용할 수 있도록 설정
// maxLenth를 5로 설정하여 5글자 이상 입력되지 않도록 설정
