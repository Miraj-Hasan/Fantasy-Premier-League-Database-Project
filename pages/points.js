import React, { useState, useEffect } from 'react';
import styles from './mainPage.module.css'; // Add your CSS styles
import { useRouter } from 'next/router';
import Popup from './popUp';import Head from 'next/head';
import Image from 'next/image';

const points = () => {
  
  const [GWplayers, setGWPlayers] = useState(Array(15).fill(null));
  const [startGameWeek, setStartGameWeek] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter(); 
  
  const id = router.query.id;
  const teamName = router.query.teamName;
  const gameWeek = router.query.gameWeek;
  const tempId = router.query.tempId;

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = (id) => {
    if(id !== 0)
      setSelectedPlayerId(id);
    setIsPopupVisible(!isPopupVisible);
  };



  const [GameWeek, setGameWeek] = useState(router.query.gameWeek-1);









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
        const response = await fetch(`/api/points?userId=${tempId}&gameWeek=${GameWeek}`);
        const data = await response.json();

        try{
          setGWPlayers(data.players);
          setTotalPoints(0);
          data.players.filter(p => (p !== null && p.Playing11 === 1)).map(player => {
            setTotalPoints(totalPoints => totalPoints+player.Points);
          });
          
         }
        catch(error)
        {
          console.log("data not arrived 111111111");
        } 
        
      } catch (error) {
        console.error('Error:', error);
      }
    }


    async function fetchTeamName() {
      try {
        const response = await fetch(`/api/getTeamName?userId=${tempId}`);
        const data = await response.json();

        try{
          setCurrentTeam(data.names[0].TeamName);
          setCurrentUser(data.names[0].UserName);
        }
        catch(error)
        {
          console.log("data not arrived");
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    
    }


    async function fetchGW() {
        try {
          const response = await fetch(`/api/startingGW?userId=${tempId}`);
          const data = await response.json();
  
          try{
            setStartGameWeek(data.info[0].StartingGW);
            //console.log('gw', data.info[0].StartingGW);
          }
          catch(error)
          {
            console.log("data not arrived 2222222222");
          }
          
        } catch (error) {
          console.error('Error:', error);
        }
      }

      fetchTeamName();
        fetchData();
        fetchGW();
    },[GameWeek]);





  

    const PlayerBox = ({ player }) => {
        if(player === null) {
            return (
                <div className={styles.playerBox}>
                  <b><small>
                    Empty
                    <br/>
                  </small></b>
                </div>
              );
        }
        else {
            return (
                <div className={`${styles.playerBox} ${styles[`playerBoxAvailable${player.Availability}`]}`}>
                  <div className={styles.playerContent}>
                  <b>
                  <img src={player.Photo} alt="Profile picture"
                      style={{
                        width: 80,
                        height: 80,
                        marginRight: 10,
                        marginLeft: 10
                    }}></img><br/>
                    {player.FullName}
                    <br/>
                    {player.HomeTeamId} vs {player.AwayTeamId}<br/>
                    {player.Points} <br/>{player.Cat1} , {player.Cat2}
                  </b>
                  <button className={styles.subButton} onClick={() =>  handlePopupToggle(player.P_ID)}>Player Info</button>
                  <br/>
                  </div>
                </div>
            );
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

    const fixture = () => {
      router.push({
        pathname: '/fixture',
        query : { id, teamName, gameWeek } 
      });
    };


    const statusPage = () => {
      router.push({
        pathname: '/status',
        query : { id, teamName, gameWeek } 
      });
    };



    const prevGw = async() => {
        if(startGameWeek < GameWeek)
            setGameWeek(GameWeek-1);
        else
            alert('You did not have a team before this GameWeek');
    };

    const nextGw = async() => {
        if(GameWeek+1 < gameWeek)
            setGameWeek(GameWeek+1);
        else
            alert('The GameWeek has not started yet');
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
                      <a className={styles.currentpage}>Points</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={fixture}>Fixtures</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={transfer}>Transfer</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={statusPage}>Status</a>
                  </li>
              </ul>
          </div>
          <div className={styles.titles}>
            <h2 className={styles.headings}> Gameweek {GameWeek} </h2>
            <h2 className={styles.headings}> {currentTeam} </h2>
            
            <h2 className={styles.headings}> Points :{totalPoints} </h2>
          </div>
          <h4 className={styles.headings1}> {currentUser} </h4>
        </div>



        <div className={styles.mainTeam}>
          <div className={styles.goalkeeper}>
            {GWplayers && GWplayers.filter(p => (p !== null && p.Position === 'GKP' && p.Playing11 === 1)).map((player) => (
              <PlayerBox key={player.P_ID} player={player} />
            ))}
          </div>
          <div className={styles.defenders}>
            {GWplayers && GWplayers.filter(p => (p !== null && p.Position === 'DEF' && p.Playing11 == 1)).map((player) => (
              <PlayerBox key={player.P_ID} player={player}/>
            ))}
          </div>
          <div className={styles.midfielders}>
            {GWplayers && GWplayers.filter(p => (p !== null && p.Position === 'MID' && p.Playing11 == 1)).map((player) => (
              <PlayerBox key={player.P_ID} player={player} />
            ))}
          </div>
          <div className={styles.forwards}>
            {GWplayers && GWplayers.filter(p => (p !== null && p.Position === 'FWD' && p.Playing11 == 1)).map((player) => (
              <PlayerBox key={player.P_ID} player={player} />
            ))}
          </div> 
          <div className={styles.benches}>
            {GWplayers && GWplayers.filter(p => (p !== null && p.Playing11 === 0)).map((player) => (
              <PlayerBox key={player.P_ID} player={player} />
            ))}
          </div>
          <div className={styles.prevNext}>
          <button className={styles.buttons} onClick={prevGw}>
            Prev
          </button>
          <button className={styles.buttons} onClick={nextGw}>
            Next
          </button>
          </div>

          {isPopupVisible && <Popup onClose={handlePopupToggle} playerId={selectedPlayerId} />}


        </div>
      </div>
    );
  
  
  


}; 

export default points;