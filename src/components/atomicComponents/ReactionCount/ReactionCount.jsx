import { useState } from 'react'
import { Container } from './StyledReactionCount'
import LikeReaction from '../Reaction/LikeReaction'
import HateReaction from '../Reaction/HateReaction'

const ReactionCount = () => {
  const [counting, setCounting] = useState({ up: null, down: null })

  const handleCount = (type) => {
    if (!counting[type]) {
      setCounting((prevCounting) => ({ ...prevCounting, [type]: 1 }))
    } else {
      setCounting((prevCounting) => ({ ...prevCounting, [type]: null }))
    }
  }

  return (
    <Container>
      <LikeReaction
        onClick={() => {
          handleCount('up')
        }}
        active={counting.up}
      />
      <HateReaction
        onClick={() => {
          handleCount('down')
        }}
        active={counting.down}
      />
    </Container>
  )
}

export default ReactionCount
