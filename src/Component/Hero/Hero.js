import React from 'react';
// import img from '../../assest/img/hero.jpg'
import { Typewriter } from "react-simple-typewriter"
// import Services from '../Services/Services';
// import Contact from '../Contact/Contact';

const Hero = () => {
    return (
        <div className='bg-base-100'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className="justify-items-center h-100 ">
                        <img src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif" class="sm:w-full object-cover md:w-48 lg:w-full rounded-lg shadow-2xl " alt='' />
                        {/* <img src={img} class="sm:w-full object-cover md:w-48 lg:w-full rounded-lg shadow-2xl " alt='' /> */}
                    </div>
                    <div className="">
                        <p>Hi, This is</p>
                        <h1 class=" text-2xl md:text-4xl lg:text-5xl font-bold">MD ASIF AL AZAD!</h1>

                        <span>
                            <Typewriter
                                words={['Web Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>

                        <p class="py-6">I'm a Front-End developer. I have 1.5+ years of coding experience of html, css, Bootstrap, Tailwind, JS, React, React native, mongoDB, NodeJs, expressJs
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;