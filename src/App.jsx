import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Schedule from './components/Schedule'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Video from './components/Video'
import Points from './components/Points'
import Producer from './components/Producer'
import Expectations from './components/Expectations'
import Entry from './components/Entry'
// import Latest from './components/Latest'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Vision />
      <Schedule />
      <Mission />
      <Video />
      <Points />
      <Producer />
      {/* <Expectations /> */}
      <Entry />
      {/* <Latest /> */}
      <Footer />
    </div>
  )
}

export default App