import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Benefits } from './pages/Benefits/Benefits';
import { Home } from './pages/Home/Home';
import { MobileMenu } from './pages/MobileMenu/MobileMenu';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { Reviews } from './pages/Reviews/Reviews';
import { Tariffs } from './pages/Tariffs/Tariffs';
import { Team } from './pages/Team/Team';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './App.scss';

const App = () => {
  const navigate = useNavigate();
  const [headerIsVisible, setHeaderIsVisible] = useState(true);

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="App">
      {headerIsVisible &&  
        <Header setHeaderIsVisible={setHeaderIsVisible} />
      }
     
      <main className="App__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/mobileMenu" element={
            <MobileMenu setHeaderIsVisible={setHeaderIsVisible} />}
          />
        </Routes>
      </main>

      {headerIsVisible &&  
        <Footer setHeaderIsVisible={setHeaderIsVisible}/>
      }
    </div>
  );
};

export default App;
