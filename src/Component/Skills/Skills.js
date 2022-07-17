import React from 'react';
import 'boxicons';
import html from '../../assest/Icons/html.svg'
import css from '../../assest/Icons/css-3-logo-png-transparent.png'
import js from '../../assest/Icons/javascript.png'
import reactI from '../../assest/Icons/React-icon.svg.png'
import bootstrap from '../../assest/Icons/bootstrap.png'
import tailwindcss from '../../assest/Icons/tailwind.png'
import node from '../../assest/Icons/node-js-2.png'
import express from '../../assest/Icons/EX_icon.svg.png'
import mongoDB from '../../assest/Icons/mongodb.png'
import mern from '../../assest/Icons/MERN-logo.png'
import wordpress from '../../assest/Icons/wordpress_PNG74.png'
import reactNative from '../../assest/Icons/react-native-.png'
import typescript from '../../assest/Icons/Typescript_logo_2020.svg.png'
import redux from '../../assest/Icons/redux.svg'
import firebase from '../../assest/Icons/firebase-1.svg'
import git from '../../assest/Icons/Git-Icon-1788C.png'
import github from '../../assest/Icons/github-1.png'
import './skills.styles.css'

const Skills = () => {
    return (
        <div className='mx-5 text-neutral mt-14'>
            <h1 className="text-accent text-center text-4xl font-bold m- ">My Skills</h1>

            <div>
                <div><h2 style={{
                    wordSpacing: '10px',
                    margin: "20px 0px"
                }}
                    className="text-center pb-2 text-xl text-ent ">E X P E R T I S E</h2>
                </div>

                <div className="flex gap-4 justify-center flex-evenly flex-wrap">

                    <div className='tooltip imgDiv'><img src={html} alt='React' /><span className="tooltiptext">HTML5</span></div>
                    <div className='tooltip imgDiv'><img src={css} alt='React' /><span className="tooltiptext">CSS</span></div>
                    <div className='tooltip imgDiv'><img src={bootstrap} alt='React' /><span className="tooltiptext">BOOTSTRAP</span></div>
                    <div className='tooltip imgDiv'><img src={tailwindcss} alt='React' /><span className="tooltiptext">TAILWIND</span></div>
                    <div className='tooltip imgDiv'><img src={js} alt='React' /><span className="tooltiptext">JAVASCRIPT</span></div>
                    <div className='tooltip imgDiv'><img src={reactI} alt='React' /><span className="tooltiptext">REACT</span></div>
                    <div className='tooltip imgDiv'><img src={node} alt='React' /><span className="tooltiptext">NODE.JS</span></div>
                    <div className='tooltip imgDiv'><img src={express} alt='React' /><span className="tooltiptext">EXPRESS.JS</span></div>
                    <div className='tooltip imgDiv'><img src={mongoDB} alt='React' /><span className="tooltiptext">MONGODB</span></div>
                    <div className='tooltip imgDiv'><img src={mern} alt='React' /><span className="tooltiptext">MERN_STACK</span></div>
                    <div className='tooltip imgDiv'><img src={firebase} alt='React' /><span className="tooltiptext">FIREBASE</span></div>
                    <div className='tooltip imgDiv'><img src={git} alt='React' /><span className="tooltiptext">GIT</span></div>
                    <div className='tooltip imgDiv'><img src={github} alt='React' /><span className="tooltiptext">GITHUB</span></div>
                    <div className='tooltip imgDiv'><img src={wordpress} alt='React' /><span className="tooltiptext">WORDPRESS</span></div>
                </div>
                <div><h2 style={{
                    wordSpacing: '10px',
                    padding: "10px 0px"

                }} className="text-center pb-2 text-xl text-ent ">F A M I L I A R </h2>
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                    <div className='tooltip imgDiv'><img src={reactNative} alt='React' /><span className="tooltiptext">REACT_NATIVE</span></div>
                    <div className='tooltip imgDiv'><img src={typescript} alt='React' /><span className="tooltiptext">TYPESCRIPT</span></div>
                    <div className='tooltip imgDiv'><img src={redux} alt='React' /><span className="tooltiptext">REDUX</span></div>

                </div>
            </div>
        </div>


    );
};

export default Skills;