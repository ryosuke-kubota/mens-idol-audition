import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Entry from './components/Entry'
import Video from './components/Video'
import Latest from './components/Latest'
import Program from './components/Program'
import News from './components/News'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Entry />
      <Video />
      <Latest />
    </div>
  )
}

export default App