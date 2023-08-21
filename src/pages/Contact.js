import React from 'react'
import NavBar from '../components/NavBar'
import {FaRegAddressCard} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {BsMailbox} from 'react-icons/bs'
import Footer from './Footer'


import { Button, ContactAccessories, Accessories, ContactText, FormWrapper, Form, InputWrapper, InputDiv, TextArea } from '../Components/ContactWrapper'

export default function Contact() {
  return (
    <>
        <main className='app-main'>
            <NavBar />
            <ContactText>
                <span>Contact</span>
                <h2>Get in touch</h2>
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
                    <p>tatjanaoljaca@yahoo.com</p>
                </Accessories>

                <Accessories>
                    <BsMailbox />
                    <h3>Website</h3>
                    <a href='https://www.tatjanaoljaca.com/'>tatjanaoljaca.com</a>
                </Accessories>
                
            </ContactAccessories>

            <FormWrapper>
                <Form>
                    <InputWrapper>

                        <label for="firstname" className="form-label"> First name: </label>
                        <InputDiv
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="form-input"
                        />   
                    
                        <label for="email" className="form-label"> Mail: </label>
                        <InputDiv
                            type="email"
                            name="email"
                            id="email"
                            className="form-input"
                        />

                        <label for="phone" className="form-label"> Phone: </label>
                        <InputDiv
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-input"
                        />
                    
                        <label for="message" className="form-label"> Message: </label>
                        <TextArea
                            name="message"
                            id="message"
                            placeholder="Write your message..."
                            className="form-input"
                        />
                        
                    </InputWrapper>

                    <Button>Send Message</Button>
                </Form>
            </FormWrapper>
            
        </main>
        
        <Footer />
    </>
    )
}
