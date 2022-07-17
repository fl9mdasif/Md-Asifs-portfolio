import React from 'react';
import 'boxicons';


const Services = () => {
    return (

        <div id="services" className="">

            <h1 className="text-accent text-center text-4xl font-bold my-7 ">My service</h1>

            <div className="px-3  grid grid-cols-1 md:grid-cols-2 gap-3  lg:grid-cols-3  ">
                <div className="card w-90 bg-secondary shadow-xl">
                    <div className="card-body ">
                        <span className=""> <box-icon color="white" name='code-curly'></box-icon></span>
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        <h2 className="items-center text-accent card-title">Front-End</h2>
                        <p className="text-neutral">I design modern looking UI using HTML, CSS, JavaScript, React, DaisyUi, Tailwind, Bootstrap</p>
                    </div>
                </div>
                <div className="card w-90 bg-secondary gap-1 shadow-xl">
                    <div className="card-body">
                        <box-icon color="white" name='code-alt'></box-icon>
                        <h2 className="card-title text-accent">Back-End</h2>
                        <p className="text-neutral">Backend Rest API's development using Express.js, Node.js, MongoDB, Heroku.</p>

                    </div>
                </div>
                <div className="card w-90 bg-secondary shadow-xl">
                    <div className="card-body">
                        <box-icon color="white" name='devices'></box-icon>
                        <h2 className="card-title text-accent">Responsive Design</h2>
                        <p className="text-neutral">I used to make design responsive using Vanilla CSS, Tailwind, Bootstrap </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;