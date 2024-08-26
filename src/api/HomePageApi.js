const URL = 'https://openmind-api.vercel.app/3-4'

export const getUserApi = async (inputValue) => {
  const response = await fetch(`${URL}/subjects/?limit=1000`)
  const data = await response.json()
  return data.results.find((item) => item.name === inputValue)
}

export const createUserApi = async (inputValue) => {
  const newUserResponse = await fetch(`${URL}/subjects/?limit=1000`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: inputValue }),
  })
  return newUserResponse.json()
}
