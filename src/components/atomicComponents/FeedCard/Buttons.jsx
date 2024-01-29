import React from 'react'
import HateReaction from '../Reaction/HateReaction'
import LikeReaction from '../Reaction/LikeReaction'
import { ButtonContainer, Line, ButtonBox } from './styledCard'

const ButtonsComponent = ({ like, dislike, questionId }) => {
  return (
    <ButtonContainer>
      <Line />
      <ButtonBox>
        <LikeReaction number={like} questionId={questionId} />
        <HateReaction number={dislike} questionId={questionId} />
      </ButtonBox>
    </ButtonContainer>
  )
}

ButtonsComponent.defaultProps = {
  like: 0,
  dislike: 0,
}

export default ButtonsComponent
