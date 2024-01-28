import React, { useState } from 'react'
import { Form, TextAreaInput, Text, Button } from './styledTextArea'
import { postAnswer, putAnswer } from '../../../api/AnswerApi'

export const TextArea = ({ questionId, value, isModify, answerId, setAnswer, setIsModify }) => {
  const [content, setContent] = useState(value || '')
  const [isRejected, setIsRejected] = useState(true)

  const handleChange = (e) => {
    setContent(e.target.value)
    setIsRejected(!e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isModify) {
      const result = await putAnswer(answerId, content, isRejected)

      setIsModify(false)

      setAnswer(result)
    } else {
      const result = await postAnswer(questionId, content, isRejected)
      setAnswer(result)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaInput name='content' value={content} onChange={handleChange} placeholder='답변을 입력해주세요.' />

      {isModify ? (
        <Button type='submit' disabled={!content}>
          <Text>수정하기</Text>
        </Button>
      ) : (
        <Button type='submit' disabled={!content}>
          <Text>답변하기</Text>
        </Button>
      )}
    </Form>
  )
}
