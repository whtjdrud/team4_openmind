import axios from 'axios'

const LIMIT = 6
const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'

export const getSubject = async (id) => {
  const response = await axios.get(`${API_BASE_URL}subjects/${id}/`)
  return response.data
}

export const fetchQuestions = async ({ id, offset = 0 }) => {
  const query = `offset=${offset}&limit=${LIMIT}`
  const response = await axios.get(`${API_BASE_URL}subjects/${id}/questions/?${query}`)
  return response.data
}
export const fetchUserData = async (subjectId) => {
  const response = await axios.get(`${API_BASE_URL}subjects/${subjectId}/`)
  return response.data
}

export const postAnswer = async (questionId, content, isRejected) => {
  const response = await axios.post(`${API_BASE_URL}questions/${questionId}/answers/`, {
    content,
    isRejected,
  })
  return response.data
}

export const putAnswer = async (answerId, content, isRejected) => {
  const response = await axios.put(`${API_BASE_URL}answers/${answerId}/`, { content, isRejected })
  return response.data
}
// 답변 삭제
export const deleteAnswer = async (answerId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}answers/${answerId}/`)
    return response.data
  } catch (error) {
    return null
  }
}

// 답변 거절
export const rejectAnswer = async (questionId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}questions/${questionId}/answers/`, {
      content: '답변 거절',
      isRejected: true,
    })
    return response.data
  } catch (error) {
    return null
  }
}
