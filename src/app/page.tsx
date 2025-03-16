"use client";
import React from 'react';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from 'next/image';
import photo from "/public/a.jpg";
import design from "/public/cac.png";
import model from "/public/code.png";

import pic1 from "/public/pic1.png";
import pic2 from "/public/pic2.png";
import pic3 from "/public/pic3.png";
import pic4 from "/public/pic4.png";
import pic5 from "/public/pic5.png";
import pic6 from "/public/pic6.png";
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shanid Portfolio</title>
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-burtons dark:text-white'>Portfolio</h1>
            <ul className='flex item-center'>
              <li><BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl dark:text-white' /></li>
              <li><a
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                href="">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mohamed Shanid</h2>
            <h3 className='text-2xl py-2  md:text-3xl dark:text-white'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800  md:text-xl max-w-lg mx-auto dark:text-white'>Highly skilled and motivated Software Developer
              with a passion for crafting efficient and scalable solutions.
              Experienced in full-stack web development and proficient in
              multiple programming languages, including JavaScript, php, Laravel, React
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
            <a href="https://x.com/_shaanid"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/mohamed-shanid/"><AiFillLinkedin /></a>
            <a href="https://github.com/shaanid"><AiFillGithub /></a>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 overflow-hidden'>
            <Image src={photo} layout="fill" objectFit='cover' alt="Profile Image" />
          </div>
        </section>
        {/* end of a section */}

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Full-Stack Web Development: Proficient in both front-end and back-end development,
              capable of building end-to-end web applications with a solid understanding of
              technologies such as HTML, CSS, JavaScript, and frameworks like React.js,
              or Laravel also Expertised in cyber security tools like namp, buripsuit, wireshark, searchsploit</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='flex justify-center items-center'>
                <Image src={model} width={100} height={100} alt="Image" /></div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Developing</h3>
              <p className='py-2 dark:text-white'>Experienced software developer with a strong background in software
                design principles and methodologies. Skilled in designing robust,
                scalable, and maintainable software solutions that meet complex
                business requirements.</p>
              <h4 className='py-4 text-teal-600'>Technologies</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Laravel</p>
              <p className='text-gray-800 py-1 dark:text-white'>React</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <div className='flex justify-center items-center'>
                <Image src={design} width={125} height={125} alt="Image" /></div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Cyber Security</h3>
              <p className='py-2 dark:text-white'>Highly skilled and dedicated professional with expertise
                in ensuring the integrity, confidentiality, and availability of computer systems and networks.
                Proficient in identifying vulnerabilities, analyzing threats,
                and implementing effective measures to safeguard critical information assets.
              </p>
              <h4 className='py-4 text-teal-600'>Technologies</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Burpsuit</p>
              <p className='text-gray-800 py-1 dark:text-white'>wireshark</p>
              <p className='text-gray-800 py-1 dark:text-white'>Nmap</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>I am a versatile professional with expertise in
              Laravel, React, and Cybersecurity. With a strong background in web development and a keen interest in safeguarding digital assets,
              I specialize in building secure and robust applications using Laravel and React frameworks. </p>
          </div>
          <div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={pic1} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={pic2} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={pic3} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={pic4} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={pic5} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={pic6} className='rounded-lg object-cover' layout='responsive' alt="pic" />
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
