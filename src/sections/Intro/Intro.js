import './intro.css'
import ar from '../../assets/arrow-right.svg'
import avatar from '../../assets/avatar-big.png'

function Intro() {
  return (
    <div className='intro section'>
      <div className='intro__content'>
        <h1 className='intro__title'>
          I'm Tim Nox
          <br />
          <span>Front-end </span>
          Developer
        </h1>
        <p className='intro__subtitle'>
          Most of the time I work as a freelancer on Upwork platform. Feel free
          to contact me any time and any way you see fit.
        </p>
        <a
          className='intro__link'
          href='https://www.upwork.com/freelancers/~011c89cd7b411fe028'
          target='_blank'
          rel='noreferrer'
        >
          Hire me
          <img src={ar} alt='' />
        </a>
      </div>
      <img className='intro__avatar' src={avatar} alt='avatar' />
    </div>
  )
}
export default Intro
