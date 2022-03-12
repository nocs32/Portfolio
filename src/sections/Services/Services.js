import './services.css'
import code from '../../assets/code.svg'
import design from '../../assets/design.svg'
import scripts from '../../assets/scripts.svg'
import seo from '../../assets/seo.svg'
import consultations from '../../assets/consultations.svg'
import optimization from '../../assets/optimization.svg'

function Services() {
  return (
    <div className='services section'>
      <h2 className='services__title'>My Services</h2>
      <p className='services__subtitle'>
        This is a list of my most popular services. Please, take a look, you may
        find something you need.
      </p>
      <div className='services__tiles'>
        <div className='services__box'>
          <img className='box__img' src={code} alt='' />
          <h5 className='box__title'>Web Development</h5>
          <h6 className='box__subtitle'>Portfolio, Landing, E-Commerce</h6>
        </div>
        <div className='services__box'>
          <img className='box__img' src={design} alt='' />
          <h5 className='box__title'>UI/UX design</h5>
          <h6 className='box__subtitle'>Mobile App, Website design</h6>
        </div>
        <div className='services__box'>
          <img className='box__img' src={scripts} alt='' />
          <h5 className='box__title'>Script writting</h5>
          <h6 className='box__subtitle'>Python, JavaScript</h6>
        </div>
        <div className='services__box'>
          <img className='box__img' src={seo} alt='' />
          <h5 className='box__title'>SEO</h5>
          <h6 className='box__subtitle'>SEO optimization for websites</h6>
        </div>
        <div className='services__box'>
          <img className='box__img' src={consultations} alt='' />
          <h5 className='box__title'>Consultaions</h5>
          <h6 className='box__subtitle'>Website optimizations, SEO</h6>
        </div>
        <div className='services__box'>
          <img className='box__img' src={optimization} alt='' />
          <h5 className='box__title'>Optimization</h5>
          <h6 className='box__subtitle'>Loading speed for media, animations</h6>
        </div>
      </div>
    </div>
  )
}
export default Services
