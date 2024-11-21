import {useState, useEffect} from 'react'

function App() {

    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)

    useEffect (() => {

      const fetchPost = async () => {

        const data = await fetch ('https://jsonplaceholder.typicode.com/posts');
      }
    }, [])
}

export default App
