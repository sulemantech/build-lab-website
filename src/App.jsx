import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Programs from './pages/Programs.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Showcase from './pages/Showcase.jsx'
import ForParents from './pages/ForParents.jsx'
import About from './pages/About.jsx'
import Join from './pages/Join.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <AnnouncementBar />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/for-parents" element={<ForParents />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
