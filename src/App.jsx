import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import News from './components/News'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Program />
      <News />
    </div>
  )
}

export default App