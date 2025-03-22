import React, { useState, useEffect } from 'react';
import styles from './status.module.css'; // Add your CSS styles
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const status = () => {
  
  const router = useRouter();
  
  const id = router.query.id;
  const teamName = router.query.teamName;
  const gameWeek = router.query.gameWeek;

  let tempId = router.query.id;


  const [infos, setInfos] = useState(null);
  const [users, setUsers] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/');
    else {
        const response = fetch(`/api/authentication?token=${token}`).then(response => response.json().then(data => {
            console.log(data);
            if (!data.authenticated) router.replace('/');
        }));
    }
  }, []);







 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/status?userId=${id}&gameWeek=${gameWeek-1}`);
        const data = await response.json();

        try{
          if(data.infos.length !== 0)
            setInfos(data.infos);      

         }
        catch(error)
        {
          console.log("data not arrived");
        } 
        
      } catch (error) {
        console.error('Error:', error);
      }
    }


    async function fetchUsers() {
        try {
          const response = await fetch(`/api/getUsers?gameWeek=${gameWeek-1}`);
          const data = await response.json();
  
          try{
            setUsers(data.users);
          }
          catch(error)
          {
            console.log("data not arrived");
          }
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

        fetchData();
        fetchUsers();

    },[]);




 
    const handleUserClick = (userID) => {
        let tempId = userID;

        router.push({
            pathname: '/points',
            query : { id, teamName, gameWeek, tempId }
        });
    
    };



    const deleteAcc = async() => {
      try {
        const response = await fetch('/api/deleteAccount', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id}),
        });
        
        const data = await response.json();
        if(data.success) {
          localStorage.setItem('token', null);
      
          router.push({
              pathname: '/',
          });
            alert('Account deleted successfully');
        }
            
        
      }
      catch (error) {
        console.error(error);
      }

      
  
  };

    


    const transfer = () => {
      router.push({
        pathname: '/gwTransfer',
        query : { id, teamName, gameWeek } 
      });
    };

    const pickTeam = () => {
      router.push({
        pathname: '/mainPage',
        query : { id, teamName, gameWeek } 
      });
    };


    const showPoints = () => {
        router.push({
          pathname: '/points',
          query : { id, teamName, gameWeek, tempId } 
        });
      };


    const fixture = () => {
      router.push({
        pathname: '/fixture',
        query : { id, teamName, gameWeek } 
      });
    };
      


      return (

        <div className={styles.teamContainer}>


      <Head>
        <title>FPL</title> {/* Set the title to "FPL" */}
        <link rel="icon" href="/fpl_logo.png" /> {/* Set the favicon */}
      </Head>


        <div className={styles.page}>
            <div className={styles.menu}>
              <ul className={styles.menuList}>
                  <li className={styles.options}>
                      <a onClick={pickTeam}>My Team</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={showPoints}>Points</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={fixture}>Fixtures</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={transfer}>Transfer</a>
                  </li>
                  <li className={styles.options}>
                      <a className={styles.currentpage}>Status</a>
                  </li>
              </ul>
            </div>
          </div>
          

            <div className={styles.userProfile}>
            {infos !== null && (
            <div className={styles.userInfo}>
                <h1>{infos[0].TeamName}</h1>
                <h2>{infos[0].UserName}</h2>
                <div className={styles.userDetails}>
                <p>Total Points : {infos[0].TotalPoints}</p>
                <p>Gameweek Points : {infos[0].GW_Point}</p>
                <p>Club : {infos[0].FavClub}</p>
                <p>Country : {infos[0].Country}</p>
                <p>Team Value : {infos[0].TeamValue}m</p>
                <p>Bank Balance : {infos[0].TeamBalance}m</p>
                </div>
            </div> 
            )}

            <div className={styles.leaderboard}>
                <h2>Leaderboard</h2>
                {users && (
                <table className={styles.table}>
                    <thead className={styles.heading}><tr>
                        <th>Team Name</th><th>User Name</th><th>Total Points</th><th>GW Points</th><th>Starting Gw</th><th>Team Value</th><th>Bank Balance</th><th>Team</th>
                    </tr></thead>
                <tbody className={styles.tbody}>
                {users.map((user) => {
                    return <tr>
                        <td>{user.TeamName}</td><td>{user.UserName}</td><td>{user.TotalPoints}</td><td>{user.GW_Point}</td><td>{user.StartingGW}</td><td>{user.TeamValue}</td><td>{user.TeamBalance}</td><td><button className={styles.button} onClick={() => handleUserClick(user.UserId)}> View </button></td>
                    </tr>
                }
                )}
                </tbody>
                </table>)}


            </div>

                  <div>
                      <button className={styles.buttons} onClick={deleteAcc}>Delete acoount</button>

                  </div>




            
            </div>
            </div>
    );
  
  
  


}; 

export default status;