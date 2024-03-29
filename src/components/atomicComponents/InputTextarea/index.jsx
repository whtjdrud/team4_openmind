import { useState } from 'react'
import StyledTextarea from './StyledTextarea'

const InputTextarea = ({ placeholder }) => {
  // 텍스트 에어리어의 내용을 상태로 관리
  const [postContent, setPostContent] = useState('')

  // 텍스트 에어리어의 내용이 변경될 때 호출되는 함수
  const handleContentChange = (event) => {
    setPostContent(event.target.value)
  }

  return (
    <StyledTextarea
      value={postContent}
      onChange={handleContentChange}
      placeholder={placeholder ?? '질문을 입력해주세요'}
    />
  )
}
// placeholder 사용 예시
// <InputTextarea placeholder='여기 플레이스홀더 넣기' /> placeholder 프롭을 주지 않으면 기본값 "질문을 입력해주세요"
export default InputTextarea
