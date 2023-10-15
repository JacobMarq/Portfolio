import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_XxDRdHVhjtqMWzEha7xIa');

const Contact = () => {
        const [statusMessage, setStatusMessage] = useState("");
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
            const form = document.querySelector('#contact-form');
            const statusMessage = document.querySelector('.status-message');
            generateContactNumber();

            sendForm('default_service', 'portfolio-contact-form', form)
                .then(function(response) {
                    setStatusMessage("Message sent successfully!");
                    form.reset();
                    statusMessage.className = "status-message p-10 text-center success";
                    setTimeout(()=> {
                        statusMessage.className = 'status-message'
                    }, 5000);
                }, function(error) {
                    setStatusMessage("Failed to send message! " + error.text);
                    statusMessage.className = "status-message p-10 text-center failure";
                    setTimeout(()=> {
                        statusMessage.className = 'status-message'
                    }, 5000);
                });
        };

        const message = watch('message') || "";
        const messageCharsLeft = 1500 - message.length;
        const [contactNumber, setContactNumber] = useState("000000");

        const generateContactNumber = () => {
            const numStr = "000000" + (Math.random() * 1000000 | 0);
            setContactNumber(numStr.substring(numStr.length - 6));
        }

        return (
            <div className="container contact-main mb-10p">
                <h1 className="header ml-5p mt-5p unselectable">Contact Me</h1>

                <p className="inquiry ml-5p">For inquiries send me a message by filling out the form below.</p>

                <p className="status-message">{statusMessage}</p>
                <form className="ml-5p mr-5p" id='contact-form' onSubmit={ handleSubmit(onSubmit) }>
                    
                    <input type='hidden' name='contact_number' value={contactNumber} />

                    <input 
                        className="mt-5p input-text"
                        type='text'
                        maxLength='30'
                        aria-invalid={errors.user_name ? 'true' : 'false'}
                        {...register('user_name', { required: true }) } 
                        placeholder='Name' />
                            {errors.user_name && errors.user_name.type === "required" && (
                                <div role='alert'>Name is required</div>
                            )}
                    <br/>
                    
                    <input 
                        className="mt-5p input-text"
                        type='email'
                        aria-invalid={errors.user_email ? 'true' : 'false'}
                        {...register('user_email', { required: true }) } 
                        placeholder='Email' />
                            {errors.user_email && errors.user_email.type === "required" && (
                                <div role='alert'>Email is required</div>
                            )}
                    <br/>
                    
                    <textarea 
                        className="mt-5p input-text"
                        maxLength='1500'
                        aria-invalid={errors.message ? 'true' : 'false'}
                        {...register('message', { required: true }) } 
                        placeholder='Message' />
                            {errors.message && errors.message.type === "required" && (
                                <div role='alert'>Message is required</div>
                            )}
                            <p className='message-chars-left'>{ messageCharsLeft }</p>
                    <br/>

                    <input id='send-message-btn' className='unselectable w-auto p-15 mt-5p mb-25 center primary-btn' type='submit' value='Send Message' />
                </form>
            </div>
        );
}

export default Contact;