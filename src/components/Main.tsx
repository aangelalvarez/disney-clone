import React from 'react'
import '../styles/Main.css';

const Main: React.FC = () => {
    return (
        <div className = 'mainContainer' >
            <section className = 'mainContent'>
                <img src = "https://cannonball-cdn.bamgrid.com/assets/originals/bundle-logo-01.svg"></img>
                <button className = 'blueBtn'>GET THE DISNEY BUNDLE</button>
                <p className = 'streamNow'>Stream now. <a href = '#' className = 'whiteLink'>Terms apply</a></p>
                <img src = "https://cannonball-cdn.bamgrid.com/assets/originals/disney-franchise-logos.png" className = 'popularContent'></img>
                <div className = 'bottomLink'><a href = '#' className = 'whiteLink'>Sign up for Disney+ only.</a></div>
                <div className = 'arrowContainer'>
                    <a className = 'arrow'></a>
                </div>
            </section>
        </div>
    );
};

export default Main
