import './work.css'

function Work() {
  return (
    <div className='education section'>
      <h2 className='education__title'>Work History</h2>
      <p className='education__subtitle'>
        This is the list of my places of work and duties in the last few years.
      </p>
      <div className='education__list'>
        <div className='list__box'>
          <div className='list__left'>
            <h5 className='list__left--title'>Freelance</h5>
            <div className='list__left--subtitle'>
              Web Developer
              <span>Sep 2021 - Now</span>
            </div>
          </div>
          <div className='list__right'>
            <h5 className='list__right--title'>
              Working as a web developer on Upwork platform
            </h5>
            <p className='list__right--subtitle'>
              In the last year I've worked as a freelance web developer aside
              from my other jobs. I've created various web pages, scripts,
              designs and other custom products for my clients through Upwork.
            </p>
          </div>
        </div>
        <div className='list__box'>
          <div className='list__left'>
            <h5 className='list__left--title'>NemiCom</h5>
            <div className='list__left--subtitle'>
              System Administrator
              <span>Jun 2020 - Jun 2021</span>
            </div>
          </div>
          <div className='list__right'>
            <h5 className='list__right--title'>System Administrator</h5>
            <p className='list__right--subtitle'>
              I've worked as a network systems administrator in the ISP company
              for about a year. My main duties was configuring network
              equipment, network monitoring and bug fixing.
            </p>
          </div>
        </div>
        <div className='list__box'>
          <div className='list__left'>
            <h5 className='list__left--title'>VRP Consulting</h5>
            <div className='list__left--subtitle'>
              Salesforce Developer
              <span>Jan 2022 - Now</span>
            </div>
          </div>
          <div className='list__right'>
            <h5 className='list__right--title'>Junior Salesforce Developer</h5>
            <p className='list__right--subtitle'>
              Aside from my freelance job as a web developer, I'm working as a
              Junior Salesforce developer for one of the biggest international
              companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Work
