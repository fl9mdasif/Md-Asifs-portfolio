import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './projects.styles.css'
const Projects = () => {
    return (
        <div className=" bg-primary pb-5 ">
            <h1 className="text-accent text-center text-4xl font-bold my-7 ">My Projects</h1>
            <div className="projects text-center text-neutral pb-7 ">

                <Link to='/projects' >All</Link>
                <Link to='/projects/mern' >Mern</Link>
                <Link to='/projects/javascript' >JavaScript</Link>
                <Link to='/projects/others' >Others</Link>
                <Outlet />
            </div>
        </div>
    );
};

export default Projects;