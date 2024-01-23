import { useParams } from 'react-router-dom'
import React from 'react'
import { AnswerPageComponent } from '../components/moduleComponents/AnswerPageComponents'

const AnswerPage = () => {
  const { id } = useParams()
  return <AnswerPageComponent id={id} />
}

export default AnswerPage
