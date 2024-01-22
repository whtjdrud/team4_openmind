import React from 'react'
import { QuestionContainer, Time, Question } from './styledCard'

const QuestionComponent = ({ time, question }) => {
  return (
    <QuestionContainer>
      {/* Time은 시간 차에 따라 조정돼야한다. */}
      <Time>질문 · {time}주전</Time>
      {/* Question은 API에서 받아와서 수정해야한다. */}
      <Question>{question}</Question>
    </QuestionContainer>
  )
}

QuestionComponent.defaultProps = {
  time: '2',
  question: '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
}

export default QuestionComponent
