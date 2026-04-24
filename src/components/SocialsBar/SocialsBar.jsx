import React from "react";
import './SocialsBar.css';
import IndeedLogoFull from '../ImageComponents/SVGs/IndeedLogoFull';
import IndeedLogoSymbol from '../ImageComponents/SVGs/IndeedLogoSymbol';
import LinkedInLogoFull from '../ImageComponents/SVGs/LinkedInLogoFull';
import LinkedInLogoSymbol from '../ImageComponents/SVGs/LinkedInLogoSymbol';

const SocialsBar = () => {
    return (
        <div className='socials-bar'>
            <ul className="logo-full-list">
                <li>
                    <IndeedLogoFull/>
                </li>
                <li>
                    <LinkedInLogoFull/>
                </li>
            </ul>
            <ul className="logo-symbol-list">
                <li>
                    <a target='_blank' rel='noreferrer' href="https://profile.indeed.com/p/jacobm-r188vom">
                        <IndeedLogoSymbol/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/jacob-marquez-6a34b3219">
                        <LinkedInLogoSymbol/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialsBar;