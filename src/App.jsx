import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bookmarks from './pages/Bookmarks';
import GenericProject from './components/Projects/GenericProject';
import GenericResources from './components/Resources/GenericResources';
import Register from './components/Register/Register';
import DashBoard from './pages/DashBoard';
import EmailConfirm from './components/Register/EmailConfirm';
import EmailConfirmed from './components/Register/EmailConfirmed';
import Contributors from './pages/Contributors';

import { useAuth } from './store/AuthContext';

import { useEffect } from 'react';

function App() {
  const { handleLoginResponse } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('accessToken');
    // const userData = urlParams.get('user');
    // console.log(token + 'is the token in APp');
    if (token) {
      handleLoginResponse(token);
    }
  }, [handleLoginResponse]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />}>
          {/*child routes of /bookmarks, redirect by default to system-linux */}
          <Route index element={<Navigate to="system-linux" replace />} />
          <Route path=":category" element={<GenericProject />} />
          <Route
            path="/bookmarks/:category/:project/resources"
            element={<GenericResources />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/email-confirmation" element={<EmailConfirm />} />
        <Route path="/email-confirmed" element={<EmailConfirmed />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </div>
  );
}

export default App;

// bg-gradient-to-t from-[#ff94c2] to-[#a8e6cf] h-screen font-robot
