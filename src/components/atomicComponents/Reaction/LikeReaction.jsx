import { useState } from 'react'
import { Button } from './StyledLikeReaction'
import { ReactComponent as ThumbsUp } from '../../../assets/images/ThumbsUp.svg'

const BASE_URL = 'https://openmind-api.vercel.app/3-4'

const postReaction = async (id, formData) => {
  const response = await fetch(`${BASE_URL}/questions/${id}/reaction/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  })
  if (!response.ok) {
    throw new Error('error')
  }
  const body = await response.json()
  return body
}

const LikeReaction = ({ number, questionId }) => {
  const [likeCount, setLikeCount] = useState(number)
  const [active, setActive] = useState('false')

  const handleActiveClick = async () => {
    setActive('blue')
    try {
      const formData = JSON.stringify({
        type: 'like',
      })
      const result = await postReaction(questionId, formData)
      setLikeCount(result.like)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setActive('false')
      }, 200)
    }
  }

  return (
    <div>
      <Button $active={active} onClick={handleActiveClick}>
        <ThumbsUp fill={active === 'blue' ? 'var(--Blue50)' : 'var(--Grayscale40)'} />
        <p>좋아요 {likeCount}</p>
      </Button>
    </div>
  )
}

export default LikeReaction
