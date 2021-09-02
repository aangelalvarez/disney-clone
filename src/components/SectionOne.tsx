import React from 'react';
import '../styles/SectionOne.css';

const SectionOne: React.FC = () => {
    return (
        <div className = 'sectionOneContainer'>
            <section className =  'sectionOneContent'>
                <h1 className = 'whiteTxt'>Stream Marvel Studios' Black Widow with Premier 
                Access the same day it’s in theaters.</h1>
                <p className = 'grayTxt'>Coming July 9. Get Premier Access to Black Widow for $29.99 with a 
                Disney+ subscription, and watch as many times as you like. <a className = 'whiteLink' href = '#'>Learn more</a></p>
                <button className = 'blueBttn'>PREORDER</button>
                <img className = 'imgSmall' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Module_Mobile_BW_BlueBG_750x522.jpg'></img>
                <img className = 'imgLrg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Module_Desktop_BW_BlueBG_2160x890.jpg'></img>
                <section className = 'endlessEntertainment'>
                    <h1 className = 'whiteTxt'>Endless Entertainment</h1>
                    <p className = 'grayTxt'>Disney classics, Pixar adventures, Marvel epics, Star Wars sagas, National Geographic explorations, and more.</p>
                </section>
                <img className = 'imgSmall' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Black_Panther@2x-4.jpg'></img>
                <img className = 'imgLrg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/BlackPanther@1.5-3.jpg'></img>
            </section>
        </div>
    );
};

export default SectionOne;
