import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
      <Comment></Comment>
    </div>
  );
}
 

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increace</button>
      <button onClick={handleDecrease}>Decreace</button>
    </div>
  )
}


function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, [])
  return (
    <div>
      <h4>Comment:{comments.length}</h4>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
     
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{
      border: '2px solid pink',
      borderRadius: '10px',
      margin: '10px',
      padding: '10px',
      backgroundColor: 'gray'
    }}>
      <h4>email: {props.email}</h4>
      <p>body: {props.body}</p>
    </div>
  )
}
export default App;
