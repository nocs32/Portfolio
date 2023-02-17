import './contact.css'
import location from '../../assets/location.svg'
import mail from '../../assets/mail.svg'
import mobile from '../../assets/mobile.svg'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

function Contact() {
  const [name, setName] = useState(' ')
  const form = useRef()
  const checkName = (e) => {
    const target = e.target.value
    if (target.length < 32) {
      setName(target)
    }
  }
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className='contact section' id='contact'>
      <div className='contact__leftside'>
        <h3 className='contact__header'>Leave me your info</h3>
        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <label className='contact__form--label' htmlFor='name'>
            Your Full Name
            <span> *</span>
          </label>
          <input
            className='contact__form--input'
            type='text'
            name='name'
            onChange={checkName}
            value={name}
          />
          <label className='contact__form--label' htmlFor='email'>
            Your Email
            <span> *</span>
          </label>
          <input className='contact__form--input' type='email' name='email' />
          <label className='contact__form--label' htmlFor='subject'>
            Subject
          </label>
          <input className='contact__form--input' type='text' name='subject' />
          <label className='contact__form--label' htmlFor='msg'>
            Your Message
          </label>
          <textarea
            className='contact__form--input contact__form--textarea'
            name='msg'
          ></textarea>
          <button className='contact__form--btn' type='submit'>
            send message
          </button>
        </form>
      </div>
      <div className='contact__rightside'>
        <h3 className='contact__header'>Contact information</h3>
        <div className='contact__box'>
          <div className='contact__icon'>
            <img src={location} alt='location' />
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Country</span>
            <span className='contact__infobox--content'>Ukraine</span>
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>City</span>
            <span className='contact__infobox--content'>Kyiv</span>
          </div>
        </div>
        <div className='contact__box'>
          <div className='contact__icon'>
            <img src={mail} alt='location' />
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Email</span>
            <span className='contact__infobox--content'>timofey-t@ukr.net</span>
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Skype</span>
            <span className='contact__infobox--content'>
              live:.cid.d41206f76a6d555b
            </span>
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Telegram</span>
            <span className='contact__infobox--content'>
              https://t.me/nocs32
            </span>
          </div>
        </div>
        <div className='contact__box'>
          <div className='contact__icon'>
            <img src={mobile} alt='location' />
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Office</span>
            <span className='contact__infobox--content'>+38(093)6084043</span>
          </div>
          <div className='contact__infobox'>
            <span className='contact__infobox--title'>Personal</span>
            <span className='contact__infobox--content'>+38(098)7727926</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
