import React from 'react'
import { useParams } from 'react-router-dom'

const IndividualFeed = () => {
  const { id } = useParams()
  // 이제 id변수에 url에 적혀있는 id숫자가 담겨있습니다
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default IndividualFeed
