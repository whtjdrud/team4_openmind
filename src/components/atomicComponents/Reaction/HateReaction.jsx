import { useState } from 'react'
import { Button } from './StyledHateReaction'
import { ReactComponent as ThumbsDown } from '../../../assets/images/ThumbsDown.svg'

const HateReaction = () => {
  const [hated, setHated] = useState(false)
  const [currentColor, setCurrentColor] = useState('var(--Grayscale40)')

  const handleHateClick = () => {
    setHated(!hated)
    setCurrentColor(currentColor === 'var(--Grayscale40)' ? 'var(--Grayscale60)' : 'var(--Grayscale40)')
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
