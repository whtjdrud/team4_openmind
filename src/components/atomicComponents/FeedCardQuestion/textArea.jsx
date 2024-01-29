import React, { useState } from 'react'
import { Form, TextAreaInput, Button, Text } from '../FeedCardEmpty/styledTextArea'

export const TextArea = ({ id }) => {
  const [values, setValues] = useState({
    content: '',
  })
  const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'
  const postQuestions = async (userid) => {
    await fetch(`${API_BASE_URL}subjects/${userid}/questions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    window.location.reload()
  }

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postQuestions(id)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaInput
        type='text'
        name='content'
        value={values.content}
        onChange={handleChange}
        placeholder='질문을 입력해주세요'
      />
      {values.content ? (
        <Button type='submit'>
          <Text>질문 보내기</Text>
        </Button>
      ) : (
        <Button type='submit' disabled>
          <Text>질문 보내기</Text>
        </Button>
      )}
    </Form>
  )
}
