import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vhpp3s', 'template_u49o19l', form.current, 'h7PYFMm7WgD9u4yno')
      e.target.reset()
    };
    
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">inezitakatarina16@gmail.com</span>

                            <a href="mailto:inezitakatarina16@gmail.com" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">0822-5790-2587</span>

                            <a href="https://api.whatsapp.com/send?phone=6282257902587&text=Hello, more information!" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">katarinainezita</span>

                            <a href="https://m.me/katarinainezita" className="contact__button">Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name"  className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email"  className="contact__form-input" placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div contact__form_area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
                        </div>

                        <button href="#contact" className="button button--flex">
                            Send Message
                            <i class="uil uil-message"></i>
                            
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact

