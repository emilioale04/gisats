import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import MemberDetail from './pages/MemberDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/investigacion" element={<Research />} />
            <Route path="/publicaciones" element={<Publications />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/miembro/:id" element={<MemberDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
