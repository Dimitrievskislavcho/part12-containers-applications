import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'

function App() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getMeARandomCat = async () => {
      const {
        data: { url },
      } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cats/random`)
      return url
    }

    getMeARandomCat().then((catUrl) => {
      console.log(catUrl)
      setImage(catUrl)
    })
  }, [])

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      {image && <img src={image} alt='A phot of a cat' />}
    </>
  )
}

export default App
