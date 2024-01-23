import { useState } from 'react'
import { Button } from './StyledLikeReaction'
import { ReactComponent as ThumbsUp } from '../../../assets/images/ThumbsUp.svg'

const LikeReaction = () => {
  const [liked, setLiked] = useState(false)
  const [currentColor, setCurrentColor] = useState('var(--Grayscale40)')

  const handleLikeClick = () => {
    setLiked(!liked)
    setLiked(liked + 1)
    setLiked(liked > 0 ? null : 1)
    setCurrentColor(currentColor === 'var(--Grayscale40)' ? 'var(--Blue50)' : 'var(--Grayscale40)')
  }

  return (
    <div>
      <Button onClick={handleLikeClick} liked={liked}>
        <ThumbsUp fill={currentColor} />
        <p>좋아요 {liked}</p>
      </Button>
    </div>
  )
}

export default LikeReaction
