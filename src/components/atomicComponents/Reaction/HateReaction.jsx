import { useState } from 'react'
import { Button } from './StyledHateReaction'
import { ReactComponent as ThumbsDown } from '../../../assets/images/ThumbsDown.svg'

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

const HateReaction = ({ number, questionId }) => {
  const [dislikeCount, setDislikeCount] = useState(number)
  const [active, setActive] = useState('false')

  const handleActiveClick = async () => {
    setActive('red')
    try {
      const formData = JSON.stringify({
        type: 'dislike',
      })
      const result = await postReaction(questionId, formData)
      setDislikeCount(result.dislike)
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
        <ThumbsDown fill={active === 'red' ? 'var(--Red50)' : 'var(--Grayscale40)'} />
        <p>싫어요 {dislikeCount}</p>
      </Button>
    </div>
  )
}

export default HateReaction
