import {useState, useEffect} from 'react'
import './App.css'


export default function App() {

    const [posts, setPosts] = useState([])    //creating states
    const [error, setError] = useState(null)

    useEffect (() => {

        fetch ('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          return response.json();
        })
        .then((data) => setPosts(data))
        .catch(() => setError('Data fetching failed'));
    }, []);

    if (error) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold text-gray-800">
            Data fetching failed
          </h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Posts</h1>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.id}. {post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    )
  }
