import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    const [color, setColor] = useState<string>('transparent');
    const [blur, setBlur] = useState<string>('backdrop-filter: none');
    const [displayLogo, setDisplayLogo] = useState<string>('none');


    // function that changes the color of the top bar 
    // depending on how long the user has scrolled
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setColor('rgba(4, 7, 20, 0.75)');
            setBlur('blur(5px)');
            setDisplayLogo('block');
        } else {
            setColor('transparent');
            setBlur('none');
            setDisplayLogo('none');
        }
    };
    // listener (checks if the user has scrolled enough to fire handleScroll())
    window.addEventListener('scroll', handleScroll);

    return (
        <div className = 'topContainer' style = {{backgroundColor: color, backdropFilter: blur}}>
            <button className = 'login'>LOG IN</button>            
            <a href= '#'><img style = {{display: displayLogo}} className = 'logo' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg'></img></a>
        </div>
    );
};

export default NavBar;
