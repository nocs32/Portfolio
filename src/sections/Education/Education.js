import './education.css'

function Education() {
  return (
    <div className='education section'>
      <h2 className='education__title'>Education</h2>
      <p className='education__subtitle'>
        This is the list of my educational certificates / dimplomas.
      </p>
      <div className='education__list'>
        <div className='list__box'>
          <div className='list__left'>
            <h5 className='list__left--title'>
              Kyiv National University of Economy
            </h5>
            <div className='list__left--subtitle'>
              Student
              <span>Sep 2018 - Jun 2021</span>
            </div>
          </div>
          <div className='list__right'>
            <h5 className='list__right--title'>
              BD Diploma in Computer Science and Engineering
            </h5>
            <p className='list__right--subtitle'>
              In about 3 years of studying in the Kyiv National University of
              Economy I've obtained Bachelor's Degree in Computer Science and
              Engineering.
            </p>
          </div>
        </div>
        <div className='list__box'>
          <div className='list__left'>
            <h5 className='list__left--title'>
              Kyiv National College of Computer Systems
            </h5>
            <div className='list__left--subtitle'>
              Student
              <span>Sep 2015 - Jun 2018</span>
            </div>
          </div>
          <div className='list__right'>
            <h5 className='list__right--title'>
              Specilist Diploma in Computer Systems and Networks
            </h5>
            <p className='list__right--subtitle'>
              In about 4 years of studying in the Kyiv College of Computer
              Networks and Systems I've obtained Junior Specialist's Degree in
              Computer Systems and Networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Education
