import React from 'react';
import './Hero.css'
import heroImg from '../../assest/img/hero.jpg'
import Typed from 'react-typed';
import CV from '../../assest/CV/MD ASIF AL AZAD_Web_delveloper_RESUME.pdf'
function HeroSection() {
    return (
        <div className="bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col justify-end items-center lg:flex-row">


                    <div className="lg:w-1/2 flex justify-center ">
                        <div>
                            <p className=" text-lg mt-6 sm:mt-8 text-accent text-md">Assalamu Alaikum,<span className="text-neutral"> This is</span></p>

                            <h1 className=" text-2xl font-bold   sm:text-4xl lg:text-3xl xl:text-4xl">

                                <span className="text-neutral">
                                    MD ASIF AL AZAD.</span>
                            </h1>
                            <p className="mt-2 text-neutral sm:mt-3 sm:text-xl">
                                I am a <span className='text-accent'>
                                    <Typed
                                        strings={[
                                            'Web Developer',
                                            'Mern Stack Developer',
                                            'React.js Developer',
                                            'JavaScript ES6 Developer'
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        loop >

                                    </Typed>
                                </span>
                            </p>
                            {/* Social Icons */}
                            <div className="flex mt-3">
                                <div className="mr-1"><a target="blank" href="https://www.facebook.com/devmdasifofficial"><box-icon animation='tada-hover' type='logo' color="white" name='facebook-square'></box-icon></a></div>
                                <div className="mr-1"><a target="blank" href="https://github.com/fl9mdasif"><box-icon animation='tada-hover' type='logo' color="white" name='github'></box-icon></a></div>
                                <div className="mr-1"><a target="blank" href="https://www.linkedin.com/in/fl9mdasif/"><box-icon animation='tada-hover' type='logo' color="white" name='linkedin-square'></box-icon></a></div>

                            </div>
                            <div className="mt-4 sm:mt-">
                                <a
                                    className=" border rounded-xl py-2 px-4 text-sm text-white shadow-xl sm:text-base"
                                    href={CV} target="blank"
                                >
                                    Download CV

                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/2">
                        <img src={heroImg} alt="hero-image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
