import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default function App() {
    return (
        <div>
            <Router>
                <div className="flex flex-col justify-between h-screen">
                    <Navbar />
                    <main className='container mx-auto px-3 pb-12'>Content</main>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}
