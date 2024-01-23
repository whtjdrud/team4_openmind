import { useState } from 'react'
import { Button } from './StyledLikeReaction'
import { ReactComponent as ThumbsUp } from '../../../assets/images/ThumbsUp.svg'

const LikeReaction = () => {
  const [liked, setLiked] = useState(false)
  const [currentColor, setCurrentColor] = useState('#818181')

  const handleLikeClick = () => {
    setLiked(!liked)
    setLiked(liked + 1)
    setLiked(liked > 0 ? null : 1)
    setCurrentColor(currentColor === '#818181' ? '#1877F2' : '#818181')
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
