import { Navigate, useParams } from 'react-router-dom'
import React from 'react'
import { AnswerPageComponent } from '../components/moduleComponents/AnswerPageComponents'

const AnswerPage = () => {
  const { id } = useParams()
  const userId = localStorage.getItem('userId')
  if (!(userId === id)) {
    return <Navigate to='/' />
  }
  return <AnswerPageComponent id={id} />
}

export default AnswerPage
