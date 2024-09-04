import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.component';
import Home from './components/Home.component';
import About from './components/About.component';
import BlogPost from './components/BlogPost.component';
import Footer from './components/Footer.component';
import './App.css';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
