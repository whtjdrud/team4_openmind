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
        maxLength={6}
      />
    </Styled.InputFieldBox>
  )
}

export default InputField
