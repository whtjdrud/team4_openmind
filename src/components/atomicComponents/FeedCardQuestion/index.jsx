import React, { useEffect, useState } from 'react'
import { CardLayout } from '../FeedCard/styledCard'
import IconsComponent from '../FeedCard/Icons'
import QuestionComponent from '../FeedCard/Question'
import ButtonsComponent from '../FeedCard/Buttons'
import { TextArea } from './textArea'

const FeedCardAnswer = () => {
  const [isAnswered, setIsAnswered] = useState(false)

  return (
    <CardLayout>
      <IconsComponent isAsnwered={isAnswered} />
      <QuestionComponent question='임시로 만들어둔 질문하기 컴포넌트다' />
      <TextArea />
      <ButtonsComponent />
    </CardLayout>
  )
}

export default FeedCardAnswer
