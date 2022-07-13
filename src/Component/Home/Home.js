import React from 'react';
import Hero2 from '../Hero/Hero2';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';



const Home = () => {
    return (
        <div className=''>

            <Hero2></Hero2>
            <Services></Services>
            <Skills />
            <Contact></Contact>

        </div>
    );
};

export default Home;