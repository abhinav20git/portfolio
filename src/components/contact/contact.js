import React,{useRef} from 'react'
import './contact.css'
import LINKEDIN from '../../assets/linkedin.png';
import TWITTER from '../../assets/twitter.png';
import YOUTUBE from '../../assets/youtube.png';
import INSTAGRAM from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jpireh5', 'template_pe1c34d', form.current, '_hXk•••••••••••••••••')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Emaio Sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <div className='contact'>
        <span className='contactTitle'><h2>Contact Me</h2></span>
        <span className='contactDesc'>Please fill out the form below to discuss any work opprtunities.</span>

      </div>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='your_name'/>
        <input type='email' className='email' placeholder='Your Email' email='your_email'/>
        <textarea className='msg' name='message' rows="5" placeholder="Your Message" ></textarea>
        <button className='contactBtn'>Submit</button>
        <div className='links'>
          <a href='https://www.linkedin.com/in/abhinav-pandey-a2853b218'><img src={LINKEDIN} className='link' alt='Linkedin' /></a>
          <a href='https://www.google.com'><img src={TWITTER} className='link' alt='Twitter' /></a>
          <a href=''><img src={YOUTUBE} className='link' alt="Youtube"/></a>
          <a href=''><img src={INSTAGRAM} className='link' alt='Instagram' /></a>
        </div>
        
      </form>
    </section>
    
  )
}

export default Contact;