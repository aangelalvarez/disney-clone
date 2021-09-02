import React from 'react';
import '../styles/SectionThree.css';
import '../styles/SectionOne.css'

const SectionThree: React.FC = () => {
    return (
        <div className = 'sectionThreeContainer'>
            <section className = 'sectionThreeContent'>
                <section className = 'columns'>
                    <section className = 'text'>
                        <h1 className = 'whiteTxt'>Stream now or download and go</h1>
                        <p className = 'grayTxt'>Stream on 4 devices at once or download your favorites to watch later. With dozens of titles in stunning 4K UHD, you can watch the way you always wished.</p>
                    </section>
                    <img className = 'image' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/4DevicesLockup_English_480_optimized.png'></img>
                </section>
                <h1 style = {{marginTop: 100}} className = 'whiteTxt'>Stream exclusive Disney+ Originals</h1>
                <p className = 'grayTxt'>New stories from our incredible family of studios</p>
                <section className = 'cardContainer'>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/FAWS_(1)-3.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Mighty_Ducks.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2_(1)-1.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Wandavision_EN_(2).png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/The_Right_Stuff_EN.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/ForkyAsksAQuestion_en-US.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/HSMTMTS_EN-1.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Soul_EN_(1).png'></img>                    
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/SW_Clone_Wars.png'></img>
                </section>
            </section>
            
        </div>
    )
}

export default SectionThree;