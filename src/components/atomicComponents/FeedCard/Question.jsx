import React from 'react'
import { QuestionContainer, Time, Question } from './styledCard'
import timeSince from '../../../util/dateUtils'

const QuestionComponent = ({ askAt, question }) => {
  return (
    <QuestionContainer>
      <Time>질문 · {timeSince(askAt)}</Time>
      <Question>{question}</Question>
    </QuestionContainer>
  )
}

QuestionComponent.defaultProps = {
  askAt: '2',
  question: '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
}

export default QuestionComponent
