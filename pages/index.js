import Head from 'next/head';
import React from 'react';
import Image  from 'next/image';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import undraw from 'public/undraw_web_developer_re_h7ie.svg';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Img1 from 'public/Img1.png';

export default function Home() {
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <Head>
        <title>Sivadarshan's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' type='image/png' sizes='96x96' href='portfolio.png' />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900'>

        <section className='min-h-screen'>
          
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' font-burtons text-xl tracking-widest antialiased sm:text-2xl  md:text-3xl dark:text-white'>Sivadarshan's Portfolio</h1>
              <ul className='flex items-center'>
                <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/></li>
                <li><a href='resume.pdf' target='_blank' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:text-white'>Resume</a></li>
              </ul>
          </nav>

          <div className=' text-center'>
            <h3 className='text-3xl justify-center leading-relaxed py-4 md:text-5xl dark:text-white'>Hello,</h3>
            <h1 className='antialiased text-3xl justify-center leading-relaxed py-4 md:text-6xl dark:text-white'>I'm <b className=' animate-pulse tracking-wider text-3xl  text-yellow-500 md:text-6xl'>Sivadarshan U S</b></h1>
            <h2 className=' text-teal-400 justify-center font-medium antialiased text-3xl leading-relaxed py-4 md:text-5xl'>Front End Developer</h2>
            <p className='text-2xl leading-loose justify-center font-thin py-5 md:text-3xl dark:text-white'>A Front-End web Developer passionate about creating interactive web applications, web sites and experiences on the web</p>
          </div>

          <div className='text-3xl justify-center text-violet-500  flex gap-10 leading-loose p-5'>
           <a href='https://www.linkedin.com/in/siva-darshan-0a98781a3/' target='_blank'><AiFillLinkedin/></a>
           <a href='https://github.com/sivadarshan' target='_blank'><AiFillGithub/></a>
          </div>

          <div className='relative mx-auto rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 m-14'>
            <Image src={undraw} layout="fill"></Image>
          </div>

        </section>

        <section>
          
          <div className=' text-center'>
            <h3 className='text-3xl py-2 text-yellow-500'>Get to know me!</h3>
            <p className='text-2xl leading-loose justify-center font-thin py-3 text-gray-700 md:text-3xl dark:text-white'>Since the beginning of my journey as an <span className='text-md leading-loose justify-center font-light py-3 text-teal-500'>Front-End Developer and Designer </span>building the Front-End websites that leads to success. </p>
            <p className='text-2xl leading-loose justify-center font-thin py-3 text-gray-700 md:text-3xl dark:text-white'>I am open to job opportunities where I can learn,grow and contribute myself.If you have a good opportunity that matches my skills and experience then view my Resume</p>
          </div>

          <div>
            <div className='text-center shadow-xl p-10 rounded-xl m-5 bg-slate-50 dark:bg-slate-800 dark:shadow-2xl'>
              <h3 className='text-3xl py-2 m-4 text-yellow-500 '>Education</h3>
              <p className='text-xl leading-loose justify-center font-medium  text-gray-700 dark:text-white md:text-2xl'> Bannari Amman Institute of Technology </p>
              <p className='text-sm leading-loose justify-center font-light  text-gray-700 dark:text-white md:text-xl md:p-2'>Sathyamangalam ,Tamil Nadu</p>
              <p className='text-sm leading-loose justify-center font-light  text-gray-500 dark:text-white md:text-xl md:p-2'>B.E Infromation Science and Engineering</p>
              <p className=' text-sm leading-loose justify-center font-light  text-gray-500 dark:text-white md:text-xl md:p-2'>CGPA : 8.62</p>

              <p className='text-xl leading-loose justify-center font-medium  text-gray-700 dark:text-white'> Little Flower Convent Matric Higher Secondary School </p>
              <p className='text-sm leading-loose justify-center font-light  text-gray-700 dark:text-white md:text-xl md:p-2'>Tirupur,Tamil Nadu</p>
              <p className='text-sm leading-loose justify-center font-light  text-gray-500 dark:text-white md:text-xl md:p-2'> X , XI ,XII </p>
              <p className='text-sm leading-loose justify-center font-light  text-gray-500 dark:text-white md:text-xl md:p-2'>Grade XII : 496/600 (82.67%)</p>
            </div>

            
            <div className='  text-center shadow-xl p-10 rounded-xl m-5 bg-slate-50 dark:bg-slate-800 dark:shadow-2xl'>
                <h3 className=' py-4 text-3xl justify-center leading-loose text-yellow-500'>My Skills</h3>
                <ul className=' list-none'>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>HTML</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>CSS</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>JavaScript</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>React</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>SQL Basics</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>Tailwind CSS</li>
                <li className=' text-gray-700 py-2 font-light justify-center leading-loose text-xl dark:text-white'>Figma</li>
                </ul>
            </div>
          </div>
          <section>
          <section>
          <div className='text-center shadow-xl p-10 rounded-xl m-5 bg-slate-50 dark:bg-slate-800 dark:shadow-2xl'>
            <h3 className='py-4 text-3xl justify-center leading-loose text-yellow-500'>Project</h3>
            <div className='relative mx-auto m-11  md:px-16'>
              <a href='https://designwithdecent.netlify.app' target='_blank'><Image src={Img1} className='rounded-2xl shadow-2xl bg-teal-100 md:p-16  dark:bg-gradient-to-r from-cyan-500 to-teal-500'></Image></a>
            </div>
            <a href='https://designwithdecent.netlify.app' target='_blank' className=' font-normal leading-loose tracking-wide text-teal-500 underline underline-offset-4 text-left text-xl md:text-2xl'>T-shirt Designer</a>
            <p className=' font-thin  text-gray-900 text-justify pt-5 dark:text-white md:text-2xl md:leading-relaxed md:tracking-wider'>Create your unique and exclusive Shirt with our brand new 3D customization tool. Unleash your imagination and define your own style.Shirt fashioner (logo, Surface) adding and downloading the genuine plan they planned.By HTML, Tailwind CSS, ThreeJS.</p>
          </div>
          </section>  
          <div className=' container text-center dark:bg-teal-500 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl'>
                <h3 className=' text-yellow-500 font-semibold text-3xl text-center py-5  dark:bg-dark-900'>Get in Touch!</h3>
                <p className='text-2xl leading-loose justify-center tracking-wide font-thin p-10 md:text-2xl dark:text-white flex max-w-screen-xl '>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a href='mailto:sivadarshan4331@gmail.com' target='_blank' className='bg-gradient-to-r  from-yellow-500 to-violet-500 text-white rounded-md m-5 p-4 dark:text-white'>Mail me</a>
                <div className='container'></div>

          </div>
          <footer className=' dark:bg-slate-900 p-10'>
            <p className=' text-center text-sm dark:text-white md:text-lg font-thin tracking-wide'> © Copyright 2023. Made by Sivadarshan U S<br/>using HTML,CSS,NextJS,JavaScript</p>
          </footer>
          </section>
        </section>
      </main>
    </div>
  );
}
