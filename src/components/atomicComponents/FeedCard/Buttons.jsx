import React from 'react'
import { ButtonContainer, Line, ButtonBox, Button, Thumb, Text } from './styledCard'
import LIKE from '../../../assets/images/thumbs-up.svg'
import DISLIKE from '../../../assets/images/thumbs-down.svg'

const ButtonsComponent = ({ like, dislike, questionId }) => {
  return (
    <ButtonContainer>
      <Line />
      <ButtonBox>
        <Button>
          <Thumb src={`${LIKE}`} />
          <Text>좋아요 {like}</Text>
        </Button>
        <Button>
          <Thumb src={`${DISLIKE}`} />
          <Text>싫어요 {dislike}</Text>
        </Button>
        {questionId}
      </ButtonBox>
    </ButtonContainer>
  )
}
ButtonsComponent.defaultProps = {
  like: 0,
  dislike: 0,
}

export default ButtonsComponent
