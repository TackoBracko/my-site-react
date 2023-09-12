import React from 'react'
import {FaRegAddressCard} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'

import { Button, ContactAccessories, Accessories, ContactText, Form, InputDiv, TextArea } from './../Styles/ContactWrapper'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact(props) {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(

            'service_2fhf95g', 
            'template_70s8law', 
            form.current, 'J7VIm9YIKrgpYALO5')

          .then((result) => {
              console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <>
        <ContactText>
            <h1 className='page-title'>{props.title}</h1>
            <h2 className='page-subtitle'>Get in touch</h2>
        </ContactText>

        <ContactAccessories>

            <Accessories>
                <FaRegAddressCard />
                <h3>Address</h3>
                <p>Banja Luka 78 000</p>
            </Accessories>

            <Accessories>
                <BsTelephone />
                <h3>Phone number</h3>
                <p>+38765 979 172</p>
            </Accessories>

            <Accessories>
                <BsMailbox />
                <h3>E-mail</h3>
                <p>tatjanaoljaca@gmail.com</p>
            </Accessories>

            <Accessories>
                <BsMailbox />
                <h3>Website</h3>
                <a href='https://www.tatjanaoljaca.com/'>tatjanaoljaca.com</a>
            </Accessories>
            
        </ContactAccessories>

        
        <Form ref={form} onSubmit={sendEmail} >
            
            <label htmlFor='name' className="form-label"> Your name: </label>
            <InputDiv
                type="text"
                name="user_name"
                id="firstname"
                className="form-input"
                required
            />   
        
            <label htmlFor='email' className="form-label"> Mail: </label>
            <InputDiv
                type="email"
                name="user_email"
                id="email"
                className="form-input"
                required
            />

            <label htmlFor='subject' className="form-label">Subject: </label>
            <InputDiv
                type="text"
                name="your_subject"
                id="subject"
                className="form-input"
                required
            />
        
            <label htmlFor='message' className="form-label"> Message: </label>
            <TextArea
                name="message"
                id="message"
                placeholder="Write your message..."
                className="form-input"
            />
                
            <Button type="submit">Send Message</Button>
        </Form>    
    </>
  )
}
