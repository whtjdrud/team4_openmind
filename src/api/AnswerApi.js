const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'
export const getSubject = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}${id}/`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  } catch (err) {
    return null
  }
}
export const fetchQuestions = async (id) => {
  const response = await fetch(`${API_BASE_URL}${id}/questions/`)
  return response.json()
}
export const fetchUserData = async (subjectId) => {
  const response = await fetch(`${API_BASE_URL}${subjectId}/`)
  return response.json()
}
