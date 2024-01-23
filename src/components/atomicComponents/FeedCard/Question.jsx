import React from 'react'
import { QuestionContainer, Time, Question } from './styledCard'

const QuestionComponent = ({ askAt, question }) => {
  return (
    <QuestionContainer>
      <Time>질문 · {askAt}주전</Time>
      <Question>{question}</Question>
    </QuestionContainer>
  )
}

QuestionComponent.defaultProps = {
  askAt: '2',
  question: '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
}

export default QuestionComponent
