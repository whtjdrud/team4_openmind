import { useParams } from 'react-router-dom'
import React from 'react'
import { AskPageComponent } from '../components/moduleComponents/AskPageComponents'

const AnswerPage = () => {
  const { id } = useParams()
  return <AskPageComponent id={id} />
}

export default AnswerPage
