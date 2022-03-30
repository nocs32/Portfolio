import { useState } from 'react'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import './portfolio.css'

function Portfolio() {
  const [filter, setFilter] = useState([1, 2, 3, 4])
  const allItems = (
    <div className='gallery__items'>
      <a
        href='https://nox.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Card</h5>
        </div>
        <img src={p1} alt='' />
      </a>
      <a
        href='https://alivio.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Buisness Landing</h5>
        </div>
        <img src={p2} alt='' />
      </a>
      <a
        href='https://skateboard.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Ecommerce Shop</h5>
        </div>
        <img src={p3} alt='' />
      </a>
      <a
        href='https://portfolio.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Portfolio website</h5>
        </div>
        <img src={p4} alt='' />
      </a>
      <a
        href='https://kainox.netlify.app/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Landing</h5>
        </div>
        <img src={p5} alt='' />
      </a>
    </div>
  )
  const landingItems = (
    <div className='gallery__items'>
      <a
        href='https://nox.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Card</h5>
        </div>
        <img src={p1} alt='' />
      </a>
      <a
        href='https://alivio.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Buisness Landing</h5>
        </div>
        <img src={p2} alt='' />
      </a>
      <a
        href='https://portfolio.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Portfolio website</h5>
        </div>
        <img src={p4} alt='' />
      </a>
      <a
        href='https://kainox.netlify.app/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Landing</h5>
        </div>
        <img src={p5} alt='' />
      </a>
    </div>
  )
  const businessItems = (
    <div className='gallery__items'>
      <a
        href='https://alivio.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Buisness Landing</h5>
        </div>
        <img src={p2} alt='' />
      </a>
      <a
        href='https://skateboard.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Ecommerce Shop</h5>
        </div>
        <img src={p3} alt='' />
      </a>
      <a
        href='https://kainox.netlify.app/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Landing</h5>
        </div>
        <img src={p5} alt='' />
      </a>
    </div>
  )
  const commerceItems = (
    <div className='gallery__items'>
      <a
        href='https://skateboard.kainox.studio/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Ecommerce Shop</h5>
        </div>
        <img src={p3} alt='' />
      </a>
      <a
        href='https://kainox.netlify.app/'
        className='gallery__box'
        target='_blank'
        rel='noreferrer'
      >
        <div className='gallery__box--text'>
          <h5 className='gallery__box--title'>Business Landing</h5>
        </div>
        <img src={p5} alt='' />
      </a>
    </div>
  )
  function renderBoxes() {
    if (
      filter.includes(1) &&
      filter.includes(2) &&
      filter.includes(3) &&
      filter.includes(4)
    )
      return allItems

    if (filter.includes(2) && filter.length === 1) return landingItems
    if (filter.includes(3) && filter.length === 1) return businessItems
    if (filter.includes(4) && filter.length === 1) return commerceItems
  }
  function setAll() {
    setFilter([1, 2, 3, 4])
  }
  function setLandings() {
    setFilter([2])
  }
  function setBusiness() {
    setFilter([3])
  }
  function setEcommerce() {
    setFilter([4])
  }
  return (
    <div className='pfl section'>
      <h2 className='pfl__title'>Portfolio</h2>
      <p className='pfl__subtitle'>
        In this section are displayed a few of my latest projects. You can
        review any of them as a live website by clicking on any box.
      </p>
      <div className='pfl__gallery'>
        <div className='gallery__nav'>
          <button className='gallery__nav--btn' onClick={setAll}>
            All Categories
          </button>
          <button className='gallery__nav--btn' onClick={setLandings}>
            Landing Page
          </button>
          <button className='gallery__nav--btn' onClick={setBusiness}>
            Business Website
          </button>
          <button className='gallery__nav--btn' onClick={setEcommerce}>
            E-Commerce
          </button>
        </div>
        {}
      </div>
      {renderBoxes()}
    </div>
  )
}
export default Portfolio
