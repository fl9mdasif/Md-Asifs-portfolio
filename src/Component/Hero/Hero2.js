import React from 'react';
import './Hero.css'
import 'boxicons';
import heroImg from '../../assest/img/hero.jpg'
import Typed from 'react-typed';
import CV from '../../assest/CV/MD ASIF AL AZAD_Web_delveloper_RESUME.pdf'
// import PraticleBg from '../../assest/Particles/PraticleBg';


const Hero2 = () => {

    return (

        <div className=" grid content-center lg:h-screen  lg:grid-cols-2 2xl:grid-cols-5">
            <div
                className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
            >
                <div className="xl:max-w-xl">

                    <img
                        className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"

                        src={heroImg}
                        alt="Woman workcationing on the beach"
                    />

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
            <div className="hidden relative lg:block 2xl:col-span-3">
                <img
                    className=" rounded-xl shadow-xl w-100 h-80 object-cover object-center absolute inset-0"
                    // src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif"
                    src={heroImg}
                    alt="Woman workcationing on the beach"
                />
            </div>
        </div>



    );
};

export default Hero2;