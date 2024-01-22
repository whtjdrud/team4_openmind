import React, { useState } from 'react'
import { Form, TextAreaInput, Text, Button } from './styledTextArea'

const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'

export const TextArea = ({ questionId }) => {
  const [values, setValues] = useState({
    content: '',
    isRejected: true,
  })

  const postAnswer = async (id) => {
    const answer = await fetch(`${API_BASE_URL}questions/${id}/answers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const result = await answer.json()
    console.log(result)
    console.log(values.content)
  }

  const handleChange = (e) => {
    if (e.target.value) {
      setValues({ [e.target.name]: e.target.value, isRejected: false })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postAnswer(questionId)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaInput
        type='text'
        name='content'
        value={values.content}
        onChange={handleChange}
        placeholder='답변을 입력해주세요.'
      />
      {values.content ? (
        <Button type='submit'>
          <Text>답변하기</Text>
        </Button>
      ) : (
        <Button type='submit' disabled>
          <Text>답변하기</Text>
        </Button>
      )}
    </Form>
  )
}
