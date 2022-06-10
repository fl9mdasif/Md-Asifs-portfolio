import React from 'react';

const Services = () => {
    return (

        <div className="">
            <h3 className="text-secondary text-center text-4xl font-bold my-7">My service</h3>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3">
                <div class="card w-90 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="items-center card-title">Front-End</h2>
                        <p>I design modern looking UI using HTML, CSS, JavaScript, React, DaisyUi, Tailwind, Bootstrap</p>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 gap-1 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Back-End</h2>
                        <p>Backend Rest API's development using Express.js, Node.js, MongoDB, Heroku.</p>

                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Responsive Design</h2>
                        <p>I used to make design responsive using Vanilla CSS, Tailwind, Bootstrap </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;