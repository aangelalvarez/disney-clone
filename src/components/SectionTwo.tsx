import React from 'react';
import '../styles/SectionTwo.css';
import '../styles/SectionOne.css';

const SectionTwo = () => {
    return (
        <div className = 'sectionTwoContainer'>
            <section className = 'sectionTwoContent'>
                <h1 className = 'whiteTxt'>The new home for your favorites</h1>            
                <p className = 'grayTxt'>An unprecedented collection of the world's most beloved movies and TV series.</p>
                <section className = 'cardContainer'>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Poster_InfinityWar_EN.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/moana-poster-4-2.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_SWRiseofSkywalker.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Hamilton_Grid_Item_English.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/the-simpsons-poster-6@2x-1.png'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg'></img>
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Poster_LifeBelowZero_EN.jpg'></img>                    
                    <img className = 'cardImg' src = 'https://cannonball-cdn.bamgrid.com/assets/originals/Poster_ArtemisFowl_EN_v2.jpg'></img>
                </section>
                <button style = {{marginTop: '80px', marginBottom: '60px'}} className = 'blueBttn'>GET THE DISNEY BUNDLE</button>
            </section>
        </div>
    )
}

export default SectionTwo
