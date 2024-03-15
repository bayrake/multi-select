import { useState } from 'react'
import './App.css'
import MultiSelect from './components/MultiSelect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>{ process.env.NODE_ENV }</p>
      <p>{ import.meta.env.VITE_BASE_URL }</p> */}

      <div className='multi-select'>
        <MultiSelect />
      </div>
    </>
  )
}

export default App
