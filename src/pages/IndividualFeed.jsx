import React from 'react'
import { useParams } from 'react-router-dom'
import { AnswerPageComponent } from '../components/moduleComponents/AnswerPageComponents'

const IndividualFeed = () => {
  const { id } = useParams()
  // 이제 id변수에 url에 적혀있는 id숫자가 담겨있습니다
  return <AnswerPageComponent id={id} />
}

export default IndividualFeed
