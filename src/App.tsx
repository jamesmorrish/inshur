import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
