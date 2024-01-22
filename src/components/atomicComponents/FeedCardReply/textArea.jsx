import React, { useState } from 'react'
import styled from 'styled-components'

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
    <form onSubmit={handleSubmit}>
      <input type='text' name='content' value={values.content} onChange={handleChange} />
      <button type='submit'>답변하기</button>
    </form>
  )
}
