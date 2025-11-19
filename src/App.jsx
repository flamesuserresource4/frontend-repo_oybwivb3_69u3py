import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import PackageBuilder from './components/PackageBuilder'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Story />
        <PackageBuilder />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
