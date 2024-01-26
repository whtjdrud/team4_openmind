import axios from 'axios'

const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/questions/'

// 질문 삭제
export const deleteQuestion = async (questionId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${questionId}/`)
    return response.data
  } catch (error) {
    return null
  }
}
