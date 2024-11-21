import {useState, useEffect} from 'react'

function App() {

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
        .catch((err) => setError(err.message));
    }, []);

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
