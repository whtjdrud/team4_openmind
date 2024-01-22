import React from 'react'
import { ButtonContainer, Line, ButtonBox, Button, Thumb, Text } from './styledCard'
import LIKE from '../../../assets/images/thumbs-up.svg'
import DISLIKE from '../../../assets/images/thumbs-down.svg'

const ButtonsComponent = ({ count }) => {
  return (
    <ButtonContainer>
      <Line />
      <ButtonBox>
        <Button>
          <Thumb src={`${LIKE}`} />
          <Text>좋아요 {count}</Text>
        </Button>
        <Button>
          <Thumb src={`${DISLIKE}`} />
          <Text>싫어요</Text>
        </Button>
      </ButtonBox>
    </ButtonContainer>
  )
}

export default ButtonsComponent
