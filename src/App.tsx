import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './containers/Home';
import ProfilePage from './containers/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
