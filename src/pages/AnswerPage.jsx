import { useParams } from 'react-router-dom'
import React from 'react'
import { AskPageComponent } from '../components/moduleComponents/AskPageComponents'
import LikeReaction from '../components/atomicComponents/Reaction/LikeReaction'

const AnswerPage = () => {
  const { id } = useParams()
  return <AskPageComponent id={id} />
}

export default AnswerPage
