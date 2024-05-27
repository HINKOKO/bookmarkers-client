import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bookmarks from './pages/Bookmarks';
import GenericProject from './components/GenericProject';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />}>
          {/*child routes of /bookmarks, redirect by default to system-linux */}
          {/* Because they are the hardest projects, haha */}
          <Route index element={<Navigate to="system-linux" replace />} />
          <Route path=":category" element={<GenericProject />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;

// bg-gradient-to-t from-[#ff94c2] to-[#a8e6cf] h-screen font-robot
