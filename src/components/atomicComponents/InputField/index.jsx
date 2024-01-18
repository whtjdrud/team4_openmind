import { useState } from 'react'
import * as Styled from './StyleInputField'

const InputField = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  const handleFocusToggle = () => {
    setIsFocused(!isFocused)
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Styled.InputFieldBox focused={isFocused}>
      <Styled.PersonImg />
      <Styled.InputField
        onFocus={handleFocusToggle}
        onBlur={handleFocusToggle}
        onChange={handleInputChange}
        placeholder='이름을 입력하세요'
        value={value}
      />
    </Styled.InputFieldBox>
  )
}

export default InputField
