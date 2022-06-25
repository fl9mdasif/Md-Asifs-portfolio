import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../../assest/CV/MD ASIF AL AZAD_Web_delveloper_RESUME.pdf'


const Navbar = () => {

    // const [user] = useAuthState(auth);
    // const handleSignOut = () => {
    //     signOut(auth)
    // }

    const menuItems =
        <>
            <li><Link to='/' href="#2">Home</Link></li>
            <li><Link to='/portfolio' href="#2">Portfolio </Link></li>
            <li><Link to='/services' href="#2">Services</Link></li>
            <li><Link to='/blog' href="#2">Blog</Link></li>
            <li><Link to='/review' href="#2">Reviews</Link></li>
            <li><a target='blank' href={CV}><button className='border p-2 rounded-xl' >Download CV</button></a></li>

            {/* {
                user && <li><Link to='/dashboard' className=" text-black text-decoration-none"> Dashboard</Link></li>
            }
            {
                user ?
                    <button onClick={handleSignOut} className="btn btn-primary text-white border-none shadow-md bg-gradient-to-r  from-secondary to-primary"> Sign Out</button>
                    :
                    <li><Link to='login' href="#2">Login</Link></li>
            } */}

        </>

    return (
        <div>
            <div className="navbar  bg-primary  text-white">
                <div className="navbar-start">
                    <div className="dropdown bg-accent">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-secondary rounded-box " >
                            {menuItems}

                        </ul >
                    </div >
                    <a href="/" className="btn btn-ghost normal-case text-xl" > Dev.MDASIF</a >
                </div >
                <div className="navbar-end  h-6 bg-blue-00 hidden lg:flex" >
                    <ul className="  menu menu-horizontal p-0" >
                        {menuItems}
                    </ul >
                </div >


            </div >
        </div >
    );
};

export default Navbar;