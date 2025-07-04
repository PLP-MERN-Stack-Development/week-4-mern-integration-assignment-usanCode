import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <div className="App">

      <h1>Hello World!! My name is Usanase.</h1>
      
    </div>
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
