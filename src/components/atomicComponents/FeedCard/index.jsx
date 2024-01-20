import React from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'

const FeedCard = () => {
  return (
    <CardLayout>
      <IconsComponent />
      <QuestionComponent />
      <ReplyComponent />
      <ButtonsComponent />
    </CardLayout>
  )
}

export default FeedCard
