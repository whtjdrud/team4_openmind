import { useState } from 'react'
import { Button } from './StyledHateReaction'
import { ReactComponent as ThumbsDown } from '../../../assets/images/ThumbsDown.svg'

const HateReaction = () => {
  const [hated, setHated] = useState(false)
  const [currentColor, setCurrentColor] = useState('#818181')

  const handleHateClick = () => {
    setHated(!hated)
    setCurrentColor(currentColor === '#818181' ? '#000000' : '#818181')
  }

  return (
    <div>
      <Button onClick={handleHateClick} hated={hated}>
        <ThumbsDown fill={currentColor} />
        <p>싫어요</p>
      </Button>
    </div>
  )
}

export default HateReaction
