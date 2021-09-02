import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className = 'footerContainer'>
            <section className = 'footerContent'>
                <div className = 'logoContainer'>
                    <img style ={{width: 85}} src = 'https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg'></img>
                </div>
                <div className = 'linksContainer'>
                    <a href = '#' className = 'footerLink'>Subscriber Agreement</a>
                    <a href = '#' className = 'footerLink'>Privacy Policy</a>
                    <a href = '#' className = 'footerLink'>Your California Privacy Rights</a>
                    <a href = '#' className = 'footerLink'>Do Not Sell My Personal Information</a>
                    <a href = '#' className = 'footerLink'>Children's Online Privacy Policy</a>
                    <a href = '#' className = 'footerLink'>Closed Captioning</a>
                    <a href = '#' className = 'footerLink'>Interest-Based Ads</a>
                    <a href = '#' className = 'footerLink'>Supported Devices</a>
                    <a href = '#' className = 'footerLink'>Help</a>
                    <a href = '#' className = 'footerLink'>Gift Disney+</a>
                    <a href = '#' className = 'footerLink'>About Us</a>
                    <a href = '#' className = 'footerLink'>Disney+ Partner Program</a>
                    <a href = '#' className = 'footerLink'>Premier Access</a>
                    <a href = '#' className = 'footerLink'>The Disney Bundle</a>
                </div>
                <p className = 'grayTxt'>© Disney. All Rights Reserved.</p>
            </section>
        </div>
    );
};

export default Footer;
