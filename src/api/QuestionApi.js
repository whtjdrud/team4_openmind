import axios from 'axios'

const URL = 'https://openmind-api.vercel.app/3-4'

// 질문 삭제
export const deleteQuestion = async (questionId) => {
  try {
    const response = await axios.delete(`${URL}/questions/${questionId}/`)
    return response.data
  } catch (error) {
    return null
  }
}
