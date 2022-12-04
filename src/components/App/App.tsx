import { Navigate, Route, Routes } from 'react-router-dom';
import { Benefits } from '../../pages/Benefits/Benefits';
import { Home } from '../../pages/Home/Home';
import { Reviews } from '../../pages/Reviews/Reviews';
import { Tariffs } from '../../pages/Tariffs/Tariffs';
import { Team } from '../../pages/Team/Team';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/tariffs" element={<Tariffs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
