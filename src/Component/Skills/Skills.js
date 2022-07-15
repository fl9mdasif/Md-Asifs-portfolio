import React from 'react';
import 'boxicons';
import html from '../../assest/Icons/html.svg'
import css from '../../assest/Icons/css-3-logo-png-transparent.png'
import js from '../../assest/Icons/javascript.png'
import reactI from '../../assest/Icons/React-icon.svg.png'
import bootstrap from '../../assest/Icons/bootstrap.png'
import tailwindcss from '../../assest/Icons/tailwind.png'
// import node from '../../assest/Icons/node-js-2.png'
// import express from '../../assest/Icons/Expressjs.png'
// import mongoDB from '../../assest/Icons/mongodb.png'
import mern from '../../assest/Icons/MERN-logo.png'
import wordpress from '../../assest/Icons/wordpress_PNG74.png'
import './skills.styles.css'

const Skills = () => {
    return (
        <div className='text-neutral mt-14'>
            <h1 className="text-accent text-center text-4xl font-bold my-7 ">My Skills</h1>

            <div className="flex    justify-center">

                <div className="w-">

                    <div>

                        <div className="flex gap-3 justify-center flex-wrap">

                            <div className='imgDiv'><img src={html} alt='React' /></div>
                            <div className='imgDiv'><img src={css} alt='React' /></div>
                            <div className='imgDiv'><img src={bootstrap} alt='React' /></div>
                            <div className='imgDiv'><img src={tailwindcss} alt='React' /></div>
                            <div className='imgDiv'><img src={js} alt='React' /></div>
                            <div className='imgDiv'><img src={reactI} alt='React' /></div>
                            {/* <div className='imgDiv'><img src={node} alt='React' /></div>
                            <div className='imgDiv'><img src={express} alt='React' /></div>
                            <div className='imgDiv'><img src={mongoDB} alt='React' /></div> */}
                            <div className='imgDiv'><img src={mern} alt='React' /></div>
                            <div className='imgDiv'><img src={wordpress} alt='React' /></div>
                        </div>
                    </div>


                </div>




            </div>
        </div>
    );
};

export default Skills;