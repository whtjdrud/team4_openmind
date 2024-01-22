import React, { useState } from 'react'
import styled from 'styled-components'

const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'

export const TextArea = () => {
  const [values, setValues] = useState({
    content: '',
  })

  const postQuestions = async (id) => {
    const question = await fetch(`${API_BASE_URL}subjects/${id}/questions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const result = await question.json()
    console.log(result)
    console.log(values.content)
  }

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postQuestions(2400)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='content' value={values.content} onChange={handleChange} />
      <button type='submit'>질문하기</button>
    </form>
  )
}
