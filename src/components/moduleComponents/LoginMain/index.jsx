import { Inputdiv, LoginText, InputBox, AnswerButtonLink } from '../../../pages/HomePageStyle'
import { AskButton } from '../../atomicComponents/buttonComponent/AskButton'
import InputField from '../../atomicComponents/InputField/index'

const LoginMain = ({ isLoggedIn, inputValue, onClick, setInputValue, userStorageId }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAskQuestion = () => {
    if (!userStorageId) {
      alert('로그인이 필요합니다.')
    }
  }

  return (
    <InputBox>
      <Inputdiv>
        {isLoggedIn ? (
          <LoginText>반가워요, {inputValue}님</LoginText> // 로그인 상태일 때 텍스트 표시
        ) : (
          <InputField onChange={handleInputChange} /> // 로그인 상태가 아닐 때 InputField 표시
        )}
        <AskButton onClick={onClick}>{isLoggedIn ? '로그아웃' : '로그인'}</AskButton>
        <AnswerButtonLink to={userStorageId ? `/post/${userStorageId}/answer` : '#'}>
          <AskButton onClick={handleAskQuestion}>질문받기</AskButton>
        </AnswerButtonLink>
      </Inputdiv>
    </InputBox>
  )
}

export default LoginMain

// setstate로 질문받기 버튼을 누르면 로그인이 되어있지 않으면 로그인창이 뜨고 로그인이 되어있으면 질문받기 페이지로 이동
// 질문받기 버튼을 누르면 경고창 뜨고 로그인 해달라고 하기
// 로그인 페이지에 인풋필드에 달린 onChange이벤트로 인해서 값을 입력할때마다 로그인메인 전체가 재렌더링되는 현상 수정

// 비제어컴포넌트로 만들기
// #은 더미링크로 이동하는 것이 아니라 현재페이지에 머무르는것
