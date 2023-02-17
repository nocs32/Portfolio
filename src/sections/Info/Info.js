import './info.css'
import avatar from '../../assets/avatar-white-bg.png'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import upwork from '../../assets/upwork.svg'
import twitter from '../../assets/twitter.svg'
import sqr from '../../assets/sqr.svg'
import download from '../../assets/download.svg'
import resume from '../../assets/Resume.pdf'

function Info() {
  return (
    <div className='info'>
      <div className='info__wrap'>
        <div className='info__avatar'>
          <img className='info__avatar--img' src={avatar} alt='' />
        </div>
        <h4 className='info__title'>Tymofii Tytenko</h4>
        <h5 className='info__subtitle'>Front-end Developer</h5>
        <div className='info__social'>
          <a
            className='info__social--link'
            href='https://twitter.com/TimNocs'
            target='_blank'
            rel='noreferrer'
          >
            <img src={twitter} alt='facebook' />
          </a>
          <a
            className='info__social--link'
            href='https://www.linkedin.com/in/tymofii-tytenko-5478a0215/'
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
            <span className='bio__item--info'>23</span>
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
              <span className='langs__item--span'>80%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-80'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>jQuery</span>
              <span className='langs__item--span'>70%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-90'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>Wordpress</span>
              <span className='langs__item--span'>50%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-50'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>ReactJS</span>
              <span className='langs__item--span'>80%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-80'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>NodeJS</span>
              <span className='langs__item--span'>45%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-45'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>Figma</span>
              <span className='langs__item--span'>90%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-90'></div>
            </div>
          </div>
          <div className='langs__item'>
            <div className='langs__item--info'>
              <span className='langs__item--span'>GIT</span>
              <span className='langs__item--span'>90%</span>
            </div>
            <div className='langs__item--percents'>
              <div className='langs__item--fill fill-90'></div>
            </div>
          </div>
        </div>
        <div className='langs__extra'>
          <h4 className='langs__title'>Extra Skills</h4>
          <div className='langs__extra--item'>
            <img src={sqr} alt='' />
            <span>Python 3</span>
          </div>
          <div className='langs__extra--item'>
            <img src={sqr} alt='' />
            <span>Java, Python, C++/C#</span>
          </div>
          <div className='langs__extra--item'>
            <img src={sqr} alt='' />
            <span>Linux, macOS, Windows</span>
          </div>
          <div className='langs__extra--item'>
            <img src={sqr} alt='' />
            <span>Bash, Docker</span>
          </div>
        </div>
        <div className='info__download'>
          <a
            className='info__download--btn'
            href={resume}
            download='Resume.pdf'
          >
            <span>download cv</span>
            <img src={download} alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Info
