import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from './mainPage.module.css'
import Link from 'next/link';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef([]);
  const router = useRouter();

  const start = async () => {

    try {
      const response = await fetch('/api');

      const data = await response.json();
      if (data.success) {
        //console.log('connection established');

      } else {
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    start();
  }, []);


  useEffect(() => {
    const showSlides = () => {
      slidesRef.current.forEach((slide, index) => {
        slide.style.display = "none";
        slide.style.opacity = 0;

        if (index === slideIndex) {
          slide.style.display = "block";
          setTimeout(() => {
            slide.style.opacity = 1;
          }, 100);
        }
      });

      setSlideIndex((prevIndex) =>
        prevIndex === slidesRef.current.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(showSlides, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);


  const gwUpdateUser = async () => {
    try {
      const response = await fetch('/api/gwUpdate');

      const data = await response.json();
      const gameWeek = data.currentGW;
      if (data.success) {
        router.push({
          pathname: '/login',
          query: { gameWeek }
        });
      } else {
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const gwUpdateAdmin = async () => {
    try {
      const response = await fetch('/api/gwUpdate');

      const data = await response.json();
      const gameWeek = data.currentGW;
      if (data.success) {
        router.push({
          pathname: '/loginAdmin',
          query: { gameWeek }
        });
      } else {
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // slideshow.js






  return (
    <div>
      <Head>
        <title>FPL</title> {/* Set the title to "FPL" */}
        <link rel="icon" href="/fpl_logo.png" /> {/* Set the favicon */}
      </Head>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.options}>
            <Link href='/' style={{ textDecoration: 'none' }}>Home
            </Link>
          </li>
          <li className={styles.options}>
            <a onClick={gwUpdateUser}>User Login</a>
          </li>
          <li className={styles.options}>
            <a onClick={gwUpdateAdmin}>Admin Login</a>
          </li>
          </ul>
      </div >
      <div className={styles.contentContainer}>
        <Image src="/fpl_logo.png"
          alt="Logo Alt Text"
          width={300} // Set the desired width
          height={500} />
        <div className={styles.slideshow_container}>
          <div className={styles.slide_fade} ref={(el) => (slidesRef.current[0] = el)}>
            <Image src="/fpl_ss_1.jpg" alt="Image 1"
              width={850} // Set the desired width
              height={500} />
          </div>
          <div className={styles.slide_fade} ref={(el) => (slidesRef.current[1] = el)}>
            <Image src="/fpl_ss_2.png" alt="Image 2"
              width={850} // Set the desired width
              height={500} />
          </div>
          {/* { <div className={styles.slide_fade} ref={(el) => (slidesRef.current[2] = el)}>
            <Image src="/fpl_ss_3.png" alt="Image 3"
              width={850} // Set the desired width
              height={500} />
          </div> } */}
          <div className={styles.slide_fade} ref={(el) => (slidesRef.current[2] = el)}>
            <Image src="/fpl_ss_4.jpg" alt="Image 4"
              width={850} // Set the desired width
              height={500} />
          </div>
          <div className={styles.slide_fade} ref={(el) => (slidesRef.current[3] = el)}>
            <Image src="/fpl_ss_7.jpg" alt="Image 7"
              width={850} // Set the desired width
              height={500} />
          </div>

          <a className="prev" onClick={() => setSlideIndex((prevIndex) => prevIndex - 1)}></a>
          <a className="next" onClick={() => setSlideIndex((prevIndex) => prevIndex + 1)}></a>
        </div>
      </div>
      {/* <button onClick={gwUpdate}>Login</button> */}
      <div className={styles.mainFrame}>
        <p >Keen to become a <a href="/" style={{ color: 'lightpink' }}>FPL</a> manager but not sure how? We've got you covered.</p>

        <h3 style={{ color: 'cyan' }}>How to register</h3>
        <p>To play Fantasy Premier League for the first time, you must register on the FPL site.</p>
        <p>Head over to <a href="/signup" style={{ color: 'lightpink' }}>fantasy.premierleague.com</a> to register your account by submitting an email address, setting up a password.&nbsp;&nbsp;</p><div >
          <div >
            <div >
              <h3 style={{ color: 'cyan' }}>It's never too late to play FPL!</h3>
              <p >Pick your 2023/24 team now</p>
              <a href="/" style={{ color: 'lightpink' }}>
                Play Fantasy
              </a>
              <h3 style={{ color: 'cyan' }}>How to play </h3>
              <p>FPL is a game that casts you in the role of a Fantasy manager of Premier League players. </p>
              <p>You must pick a squad of 15 players, who score points for your team based on their performances for their clubs in PL matches.</p>

              <p>Prices are given to players based on the number of FPL points they are projected to deliver and you are limited to a budget of £100.0m for your 15-man squad.   </p>
              <p>For a complete guideline</p>
              {/* <a href = "https://www.youtube.com/watch?v=SV_F-cL8fC0" target='blank' style={{ color: 'lightpink' }}>Click here</a> */}



              <iframe width="560" height="315" src="https://www.youtube.com/embed/SV_F-cL8fC0?si=x4HUVemDZcLp21qD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>




              <br></br>
              <br></br>
              <br></br>
            </div>

            {/* <button onClick={start}>Login</button> */}
          </div>
        </div>
      </div>
    </div>


  );
};

export default Home;