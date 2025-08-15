
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
export default function Home() {
 const navigate = useNavigate();

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to My React Learning Repo!</h1>

        <p>
          Hi, I’m Kailash Gayari This repository is a collection of projects and examples I’ve created to learn and understand React concepts deeply.
        </p>

        <p>
          Each folder/module in this repo covers different React features — from functional components to hooks, context API, routing, and more.
        </p>

        <p>
          Feel free to explore and learn along with me!
        </p>

        <a
          className="App-link"
          href="https://github.com/kailash-dev/react-learning"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the GitHub Repo
        </a>

        <br />

        <button
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
          onClick={() => navigate('/concepts')}
        >
          Next
        </button>
      </header>
    </div>
  );
}
