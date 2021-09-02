import React from 'react';
import './App.css';
import Main from './components/Main';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Main />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
    );
};

export default App;
