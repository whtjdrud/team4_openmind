import React, { useEffect, useRef, useState } from 'react'
import KeBabMenuList from './KebabMenuList'
import { Container, Kebab } from './StyledKebabMenuList'
import { deleteAnswer, rejectAnswer } from '../../../api/AnswerApi'

const AnswerKebab = ({ answerId, questionId, isRejected, handleDeleteQuestion, setAnswer, setIsModify }) => {
  const buttonRef = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const handleOnToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleDeleteAnswer = async (id) => {
    await deleteAnswer(id)
    setAnswer(null)
  }

  const handleRejectAnswer = async (id) => {
    const result = await rejectAnswer(id)
    setAnswer(result)
    setIsModify(false)
  }

  const handleOutsideClick = (e) => {
    if (e.target !== buttonRef.current) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <Container>
      <button type='submit' onClick={handleOnToggle}>
        <Kebab ref={buttonRef} />
      </button>
      {isOpen && (
        <KeBabMenuList
          data={[questionId, answerId, isRejected, handleDeleteQuestion, handleDeleteAnswer, handleRejectAnswer]}
        />
      )}
    </Container>
  )
}

export default AnswerKebab
