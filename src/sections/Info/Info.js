import './info.css'
import avatar from '../../assets/avatar-white-bg.png'
import github from '../../assets/github.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import upwork from '../../assets/upwork.svg'
import twitter from '../../assets/twitter.svg'
import sqr from '../../assets/sqr.svg'
import download from '../../assets/download.svg'

function Info() {
  return (
    <div className='info'>
      <div className='info__avatar'>
        <img className='info__avatar--img' src={avatar} alt='' />
      </div>
      <h4 className='info__title'>Tim Nox</h4>
      <h5 className='info__subtitle'>Front-end Developer</h5>
      <div className='info__social'>
        <a
          className='info__social--link'
          href='https://www.facebook.com/TeamOFFey/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={facebook} alt='facebook' />
        </a>
        <a
          className='info__social--link'
          href='https://www.instagram.com/nocs32/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagram} alt='facebook' />
        </a>
        <a
          className='info__social--link'
          href='https://twitter.com/TimofiuN'
          target='_blank'
          rel='noreferrer'
        >
          <img src={twitter} alt='facebook' />
        </a>
        <a
          className='info__social--link'
          href='https://www.linkedin.com/in/%D1%82%D0%B8%D0%BC%D0%BE%D1%84%D0%B5%D0%B9-%D1%82%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE-5478a0215/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='facebook' />
        </a>
        <a
          className='info__social--link'
          href='https://www.upwork.com/freelancers/~011c89cd7b411fe028'
          target='_blank'
          rel='noreferrer'
        >
          <img src={upwork} alt='facebook' />
        </a>
        <a
          className='info__social--link'
          href='https://github.com/nocs32'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='facebook' />
        </a>
      </div>
      <div className='info__bio'>
        <div className='bio__item'>
          <span className='bio__item--name'>Age</span>
          <span className='bio__item--info'>22</span>
        </div>
        <div className='bio__item'>
          <span className='bio__item--name'>Residense</span>
          <span className='bio__item--info'>BD</span>
        </div>
        <div className='bio__item'>
          <span className='bio__item--name'>Freelance</span>
          <span className='bio__item--info bio__item--green'>Available</span>
        </div>
        <div className='bio__item'>
          <span className='bio__item--name'>Address</span>
          <span className='bio__item--info'>Kyiv, Ukraine</span>
        </div>
      </div>
      <div className='info__langs'>
        <h4 className='langs__title'>Languages</h4>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>Ukrainian</span>
            <span className='langs__item--span'>100%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>Russian</span>
            <span className='langs__item--span'>100%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>English</span>
            <span className='langs__item--span'>80%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-80'></div>
          </div>
        </div>
      </div>
      <div className='info__langs'>
        <h4 className='langs__title'>Skills</h4>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>HTML5</span>
            <span className='langs__item--span'>100%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>CSS3</span>
            <span className='langs__item--span'>95%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-95'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>JavaScript</span>
            <span className='langs__item--span'>90%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-90'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>jQuery</span>
            <span className='langs__item--span'>90%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-90'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>ReactJS</span>
            <span className='langs__item--span'>75%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-75'></div>
          </div>
        </div>
        <div className='langs__item'>
          <div className='langs__item--info'>
            <span className='langs__item--span'>Figma</span>
            <span className='langs__item--span'>95%</span>
          </div>
          <div className='langs__item--percents'>
            <div className='langs__item--fill fill-95'></div>
          </div>
        </div>
      </div>
      <div className='langs__extra'>
        <h4 className='langs__title'>Extra Skills</h4>
        <div className='langs__extra--item'>
          <img src={sqr} alt='' />
          <span>Bootstrap, Materialize</span>
        </div>
        <div className='langs__extra--item'>
          <img src={sqr} alt='' />
          <span>Stylus, Sass, Less</span>
        </div>
        <div className='langs__extra--item'>
          <img src={sqr} alt='' />
          <span>Gulp, Webpack, Grunt</span>
        </div>
        <div className='langs__extra--item'>
          <img src={sqr} alt='' />
          <span>GIT Knowledge</span>
        </div>
      </div>
      <div className='info__download'>
        <button className='info__download--btn'>
          <span>download cv</span>
          <img src={download} alt='' />
        </button>
      </div>
    </div>
  )
}
export default Info
