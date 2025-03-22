import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './signup.module.css';

const SignupPage = () => {
  const router = useRouter();

  const gameWeek = router.query.gameWeek;


  const [showInvalidPopup, setShowInvalidPopup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    teamname: '',
    favClub: '',
    country: '',
    // Add other form fields here
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData, gameWeek}),
      });

      const data = await response.json();
      if (data.success) {
        const id = data.result[0].UserId;
        const teamName = data.result[0].TeamName;
        localStorage.setItem('token',data.token);
        //const gw = data.result[0].UserId;

        router.push({
          pathname: '/createTeam2',
          query : { id, teamName, gameWeek } 
        });
        //router.push('/createTeam2'); // Redirect to login page after successful signup
      } else {
        setShowInvalidPopup(true);
        console.log('Signup failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if(name === "email")
      setShowInvalidPopup(false);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h2 align="center">Sign Up</h2>
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='username'>USERNAME</label>
        <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
         <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='password'>PASSWORD</label>
        <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='email'>EMAIL</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='teamname'>TEAM NAME</label>
        <input
            type="text"
            id="teamname"
            name="teamname"
            value={formData.teamname}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='favClub'>Favourite Club</label>
        <input
            type="text"
            id="favClub"
            name="favClub"
            value={formData.favClub}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
        <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor='country'>Country</label>
        <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={styles.inputField}
            required
        /></div>
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
      {showInvalidPopup && (
        <div className={styles.invalidPopup}>
          The Email already exists
        </div>
      )}
    </div>
  );
};

export default SignupPage;