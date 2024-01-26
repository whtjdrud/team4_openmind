import * as Styled from './StyleButtonEdit'

const ButtonEdit = ({ onClick, isModify }) => {
  return (
    <Styled.Button onClick={onClick} $isModify={isModify}>
      {isModify ? `취소하기` : `수정하기`}
    </Styled.Button>
  )
}

export default ButtonEdit
