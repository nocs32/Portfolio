import Info from './sections/Info/Info'
import Intro from './sections/Intro/Intro'
import Navigation from './sections/Navigation/Navigation'
import Services from './sections/Services/Services'
import Education from './sections/Education/Education'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='container'>
        <Info />
        <Intro />
        <Services />
        <Education />
      </div>
    </div>
  )
}

export default App
