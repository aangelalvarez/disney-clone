import React from 'react';
import '../styles/SectionOne.css';
import '../styles/SectionFour.css';

const SectionFour: React.FC = () => {
    return (
        <div className = 'sectionFourContainer'>
            <section className = 'sectionFourContent'>
                <section className = 'whiteBox'>
                    <section className = 'imageContainer'>
                        <img className = 'huluDisEs' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/bundle-logo-padded.png'></img>
                    </section>
                    <section className = 'textAndButtonContainer'>
                        <p className = 'grayTxt'>Get The Disney Bundle to stream the best movies, shows, and sports with Disney+, Hulu, and ESPN+. <a href = '#' className = 'whiteLink'>Terms apply.</a></p>
                        <button style = {{marginTop: '20px', marginBottom: '20px'}} className = 'blueBttn'>GET THE DISNEY BUNDLE</button>
                    </section>
                </section>
                <h1 style = {{marginTop: 50}} className = 'whiteTxt'>Available on your favorite devices</h1>
                <section className = 'devices'>
                    <div className = 'column'>
                        <img className = 'columnImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/device-group-tv.png'></img>
                        <h1 className = 'whiteTxt'>TV</h1>
                        <p className = 'grayTxt'>Amazon Fire TV</p>
                        <p className = 'grayTxt'>Android TV Devices</p>
                        <p className = 'grayTxt'>Apple TV</p>
                        <p className = 'grayTxt'>Chromecast</p>
                        <p className = 'grayTxt'>LG TV</p>
                        <p className = 'grayTxt'>Roku</p>
                        <p className = 'grayTxt'>Samsung</p>
                        <p className = 'grayTxt'>Xfinity X1 & Flex</p>
                    </div>
                    <div className = 'column'>
                        <img className = 'columnImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/device-group-computer.png'></img>
                        <h1 className = 'whiteTxt'>Computer</h1>
                        <p className = 'grayTxt'>Chrome OS</p>
                        <p className = 'grayTxt'>MacOS</p>
                        <p className = 'grayTxt'>Windows PC</p>
                    </div>
                    <div className = 'column'>
                        <img className = 'columnImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/device-group-mobile-tablet.png'></img>
                        <h1 className = 'whiteTxt'>Mobile & Tablet</h1>
                        <p className = 'grayTxt'>Amazon Fire Tablets</p>
                        <p className = 'grayTxt'>Android Phones & Tablets</p>
                        <p className = 'grayTxt'>iPhone and iPad</p>
                    </div>
                    <div className = 'column'>
                        <img className = 'columnImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/device-group-game-consoles.png'></img>
                        <h1 className = 'whiteTxt'>Game Consoles</h1>
                        <p className = 'grayTxt'>PS4</p>
                        <p className = 'grayTxt'>PS5</p>
                        <p className = 'grayTxt'>Xbox One</p>
                        <p className = 'grayTxt'>Xbox Series X</p>
                        <p className = 'grayTxt'>Xbox Series S</p>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default SectionFour;
