import Info from './sections/Info/Info'
import Intro from './sections/Intro/Intro'
import Navigation from './sections/Navigation/Navigation'
import Services from './sections/Services/Services'
import Education from './sections/Education/Education'
import Work from './sections/Work/Work'
import Portfolio from './sections/Portfolio/Portfolio'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='container'>
        <Info />
        <Intro />
        <Services />
        <Education />
        <Work />
        <Portfolio />
        <Contact />
        <div className='map section'>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68794440414!2d30.252503394565725!3d50.401699028210494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1647193832416!5m2!1sen!2sua'
            width='100%'
            height='300px'
            loading='lazy'
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
