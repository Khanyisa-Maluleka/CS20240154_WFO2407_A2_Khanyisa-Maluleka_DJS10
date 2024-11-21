import {useState, useEffect} from 'react'

function App() {

    const [posts, setPosts] = useState(null)    //creating states
    const [error, setError] = useState(null)

    useEffect (() => 

        fetch ('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(error => setError(error))
    , []);

    return (
      <div>
        <h1>Blog Posts</h1>
        {error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={{ marginBottom: '1rem' }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  };

export default App
