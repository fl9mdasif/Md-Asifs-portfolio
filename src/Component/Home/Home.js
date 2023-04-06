import React from 'react';
import Hero2 from '../Hero/Hero2';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
// import Projects from '../Projects/Projects';
import { Outlet } from 'react-router-dom';
import { Portfolio } from '../Projects/Portfolio';
import Hero from '../Hero/Hero';



const Home = () => {
    return (
        <div className=''>

            {/* <Hero2></Hero2> */}
            <Hero />
            <Services></Services>
            <Skills />
            {/* <Projects /> */}
            <Outlet />
            <Portfolio />
            <Contact></Contact>


        </div>
    );
};

export default Home;