import React, { useEffect, useState } from 'react'
import { CardLayout } from '../FeedCard/styledCard'
import IconsComponent from '../FeedCard/Icons'
import QuestionComponent from '../FeedCard/Question'
import ButtonsComponent from '../FeedCard/Buttons'
import { TextArea } from './textArea'

const FeedCardReply = ({ questionId }) => {
  return <TextArea questionId={questionId} />
}

export default FeedCardReply
