import { useState, useEffect } from 'react'

const jokesAPI = 'https://official-joke-api.appspot.com/random_joke'

function useJoke() {
  const [joke, setJoke] = useState(null)

  async function fetchJoke() {
    const response = await fetch(jokesAPI)
    const data = await response.json()
    setJoke(data)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  console.log(joke);
}
export default useJoke