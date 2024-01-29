import React, { useEffect, useRef } from 'react'
import { StyledModalContent, StyledOverlay } from './StyledQuestionModal'
import MESSAGE from '../../../assets/images/Messages.svg'
import CLOSE from '../../../assets/images/Close.svg'
import FeedCardAnswer from '../FeedCardQuestion'

const QuestionModal = ({ closeModal, name, image, id }) => {
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalRef, closeModal])

  return (
    <StyledOverlay>
      <StyledModalContent ref={modalRef}>
        <div className='modal-header'>
          <div className='title-box'>
            <img alt='메시지' src={MESSAGE} />
            <span>질문을 작성하세요</span>
          </div>
          <button type='button' onClick={closeModal}>
            <img alt='나가기' src={CLOSE} />
          </button>
        </div>
        <FeedCardAnswer name={name} image={image} id={id} />
      </StyledModalContent>
    </StyledOverlay>
  )
}

export default QuestionModal
