import React from 'react';
import 'boxicons';
import { FaDatabase, FaCode } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { DiGhostSmall } from 'react-icons/di';
import { RiBracesFill } from 'react-icons/ri';


const Services = () => {
    return (

        <div id="services" className="">

            <h1 className="text-accent text-center text-4xl font-bold my-7 ">My service</h1>

            <div className="px-3  grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-3  ">

                <div className="card w-90 bg-secondary shadow-xl">
                    <div className="card-body ">
                        <RiBracesFill color="white" />
                        <h2 className="items-center text-accent card-title">Front-end development </h2>
                        <p className="text-neutral">
                            I specialize in creating engaging user interfaces using modern front-end frameworks like React, ensuring your web app is both visually stunning and also using HTML, CSS, SASS, JavaScript, UI, Tailwind, Bootstrap
                        </p>
                    </div>
                </div>
                <div className="card w-90 bg-secondary gap-1 shadow-xl">
                    <div className="card-body">
                        <FaCode color="white" />
                        <h2 className="card-title text-accent">Back-End development</h2>
                        <p className="text-neutral">
                            I design and develop powerful server-side applications using Node.js and Express, enabling your web app to handle complex operations and heavy traffic with ease.
                        </p>

                    </div>
                </div>
                <div className="card w-90 bg-secondary gap-1 shadow-xl">
                    <div className="card-body">
                        <FaDatabase color='white' />
                        <h2 className="card-title text-accent">Database design and management</h2>
                        <p className="text-neutral">
                            I am skilled in working with MongoDB, designing and implementing efficient database structures that ensure fast and reliable data retrieval for your web app.
                        </p>

                    </div>
                </div>
                <div className="card w-90 bg-secondary gap-1 shadow-xl">
                    <div className="card-body">
                        <AiFillApi color='white' />
                        <h2 className="card-title text-accent">API development and integration</h2>
                        <p className="text-neutral">
                            I can help you integrate third-party APIs into your web app, enabling you to leverage the power of external services and data sources to enhance your app's functionality.
                        </p>

                    </div>
                </div>
                <div className="card w-90 bg-secondary shadow-xl">
                    <div className="card-body">
                        <DiGhostSmall color='white' />
                        <h2 className="card-title text-accent">Overall</h2>
                        <p className="text-neutral">
                            my MERN-stack full-stack development services are designed to provide you with a comprehensive and reliable solution that will help you achieve your business goals and deliver a world-class user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;