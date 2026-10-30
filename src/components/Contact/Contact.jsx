import React from 'react';
import './Contact.css';
import SocialsBar from '../SocialsBar/SocialsBar';

const Contact = () => {
    return (
        <div id='contact' className='container pt-20p pb-10p mr-5p ml-5p'>
            <div className='contact-content card'>
                <div className='contact-text-container'>
                    <h1 className="section-title default-cursor mb-0 mt-0">
                        Contact Me
                    </h1>

                    <div className='contact-desc'>
                        <p className='default-cursor unselectable'>For business inquiries, send me a message using the information provided below:</p>
                        <p><span>Email:</span> <a aria-label='email-link' className='link' href="mailto:jacobmarq@gmail.com" target="_blank" rel="noopener noreferrer">Jacobmarq@gmail.com</a></p>
                        
                        <p><span>Phone:</span> <a aria-label='phone-number-link' className='link' href="tel:+19496109447" target="_blank" rel="noopener noreferrer">(949)610-9447</a></p>
                        <div>
                            <p><span>Links:</span></p>
                            <SocialsBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;