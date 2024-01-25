import { Inputdiv, LoginText, InputBox, AnswerButtonLink } from '../../../pages/HomePageStyle'
import { AskButton } from '../../atomicComponents/buttonComponent/AskButton'
import InputField from '../../atomicComponents/InputField/index'

const LoginMain = ({ isLoggedIn, inputValue, onInputChange, onLoginToggle, userId }) => (
  <InputBox>
    <Inputdiv>
      {isLoggedIn ? (
        <LoginText>반가워요, {inputValue}님</LoginText> // 로그인 상태일 때 텍스트 표시
      ) : (
        <InputField value={inputValue} onChange={onInputChange} /> // 로그인 상태가 아닐 때 InputField 표시
      )}
      <AskButton onClick={onLoginToggle}>{isLoggedIn ? '로그아웃' : '로그인'}</AskButton>
      <AnswerButtonLink to={`/post/${userId}/answer`}>
        <AskButton onClick={onclick}>질문받기</AskButton>
      </AnswerButtonLink>
    </Inputdiv>
  </InputBox>
)

export default LoginMain
