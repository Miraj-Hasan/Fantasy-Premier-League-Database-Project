import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './login.module.css';
import Head from 'next/head';
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [loginType, setLoginType] = useState('User');
  
  const gameWeek = router.query.gameWeek;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData, loginType}),
      });

      const data = await response.json();
      if (data.success) {
        const id = data.output[0].UserId;
        const teamName = data.output[0].TeamName;
        localStorage.setItem('token', data.token);
        router.push({
          pathname: '/mainPage',
          query : { id, teamName, gameWeek }
        });
      } else {
        setShowInvalidPopup(true);
        console.log('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShowInvalidPopup(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const signUp = () => {
    router.push({
      pathname: '/signup',
      query : { gameWeek } 
    });
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>FPL</title> {/* Set the title to "FPL" */}
        <link rel="icon" href="/fpl_logo.png" /> {/* Set the favicon */}
      </Head>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 align='center'>User Login</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
        </div>
        <button className={styles.button} type="submit">Login</button>
        <div className={styles.signUp} >
          Don't have an account? 
          <a onClick={signUp}>
            Sign Up
          </a>
        </div>
      </form>
      {showInvalidPopup && (
        <div className={styles.invalidPopup}>
          Invalid username or password
        </div>
      )}
    </div>
  );
};

export default LoginPage;