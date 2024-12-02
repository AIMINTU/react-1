
import { useState } from 'react'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/headers/Headers'
import Bookmark from './components/Bookmarks/bookmark/bookmark'
function App() {
  const [values, setValues] = useState([])
  const [reading, setReading] = useState(0)
  console.log(reading)

  const handleClick = (info) => {
    setValues([...values, info])

  }
  const handleMin = (time) => {
    const convertedTime = parseInt(time)
    setReading(reading + convertedTime)

  }

  return (

    // <RouterProvider router={router}></RouterProvider>
      <div>
        <Headers></Headers>
        <div className='md:flex max-w-5xl mx-auto'>
          <Blogs handleclick={handleClick} handleMin={handleMin}></Blogs>
          <Bookmarks values={values} reading={reading}></Bookmarks>
        </div>
      </div>
  

  )

}

export default App
