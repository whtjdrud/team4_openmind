import React, { useState } from 'react'
import { Form, TextAreaInput, Text, Button } from './styledTextArea'

const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'

export const TextArea = ({ questionId }) => {
  const [content, setContent] = useState('')
  const [isRejected, setIsRejected] = useState(true)

  const postAnswer = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}questions/${questionId}/answers/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, isRejected }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      // 여기에 성공 시 처리 로직 추가
    } catch (error) {
      // 여기에 오류 처리 로직 추가
    }
  }
  const handleChange = (e) => {
    setContent(e.target.value)
    setIsRejected(!e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content) {
      postAnswer()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaInput name='content' value={content} onChange={handleChange} placeholder='답변을 입력해주세요.' />
      <Button type='submit' disabled={!content}>
        <Text>답변하기</Text>
      </Button>
    </Form>
  )
}
