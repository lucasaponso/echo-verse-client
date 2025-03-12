import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import router
import Login from './Login'; // Import Login component
import Register from './Register'; // Import Register component
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrapping the app with Router */}
      <div className="App">
        <Routes> {/* Defining routes */}
          <Route path="/" element={<Login />} /> {/* Default route is Login */}
          <Route path="/register" element={<Register />} /> {/* Route for Register */}
          <Route path="/login" element={<Login />} /> {/* Route for Register */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
