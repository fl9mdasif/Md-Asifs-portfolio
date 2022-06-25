import React from 'react';
import './Hero.css'
import Typed from 'react-typed';
import CV from '../../assest/CV/MD ASIF AL AZAD_Web_delveloper_RESUME.pdf'
import PraticleBg from '../../Particles/PraticleBg';


const Hero2 = () => {

    return (


        <div class="">
            <PraticleBg></PraticleBg>
            <div class=" grid lg:grid-cols-2 2xl:grid-cols-5">
                <div
                    class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
                >
                    <div class="xl:max-w-xl">

                        <img
                            class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                            src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif"
                            alt="Woman workcationing on the beach"
                        />
                        <h1 class="mt-6 text-2xl font-bold  sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            <span className="text-accent">Assalamu Alaikum, This is</span>

                            <br class="" />
                            <span class="text-neutral">
                                MD ASIF AL AZAD.</span>
                        </h1>
                        <p class="mt-2 text-neutral sm:mt-4 sm:text-xl">
                            I am a <span class='text-accent'>
                                <Typed
                                    strings={[
                                        'Web Developer',
                                        'React.js Developer',
                                        'JavaScript ES6 Developer'
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop >

                                </Typed>
                            </span>
                        </p>
                        <div class="mt-4 sm:mt-6">
                            <a
                                className=" border rounded-xl py-2 px-4 text-sm text-white shadow-xl sm:text-base"
                                href={CV} target="blank"
                            >
                                Download CV

                            </a>
                        </div>
                    </div>
                </div>
                <div class="hidden relative lg:block 2xl:col-span-3">
                    <img
                        class=" rounded-xl shadow-xl w-100 h-80 object-cover object-center absolute inset-0"
                        src="https://cdn.dribbble.com/users/1162077/screenshots/5403918/focus-animation.gif"
                        alt="Woman workcationing on the beach"
                    />
                </div>
            </div>
        </div >


    );
};

export default Hero2;