import React, { useState, useEffect } from 'react';
import styles from './mainPage.module.css'; // Add your CSS styles
import { useRouter } from 'next/router';
import Popup from './popUp';
import Head from 'next/head';
import Image from 'next/image';

const mainPage = () => {
  
  const [players, setPlayers] = useState([]);
  const [gameWeek, setGameWeek] = useState(null);

  const [notices, setNotices] = useState(null);
  
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = (id) => {
    if(id !== 0)
      setSelectedPlayerId(id);
    setIsPopupVisible(!isPopupVisible);
  };



  const router = useRouter();
  
  const id = router.query.id;
  const teamName = router.query.teamName;
  const gw = router.query.gameWeek;
  const tempId = router.query.id;
  

  


  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token',token);
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
        const response = await fetch(`/api/mainPage?userId=${id}&gameWeek=${gw}`);
        const data = await response.json();
        
        try{
          const processedData = processPlayerData(data.players);
          
          //console.log(data.players);
          setPlayers(processedData);
          //console.log(players);
          
        }
        catch(error)
        {
          console.log("data not arrived");
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }


    async function fetchNotifications() {
      try {
        const response = await fetch(`/api/notification?userId=${id}`);
        const data = await response.json();
        try{
          setNotices(data.notices);
          //console.log(notices);
          if(data.notices !== null) {
            data.notices.map(notice => {
              alert(notice.MESSAGE);
            })
          }
          //console.log('notices',data.notices);
        }
        catch(error)
        {
          console.log("data not arrived");
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchNotifications();



    fetchData();
    
  }, [id]);


  function processPlayerData(players) {
    
    setGameWeek(gw);
    let fwds = [];
    let mids = [];
    let defs = [];
    let gks = [];

  
    players.map(player => {
      if (player.Position === 'FWD') {
        fwds.push(player);
      } else if (player.Position === 'MID') {
        mids.push(player);
      } else if (player.Position === 'DEF') {
        defs.push(player);
      } else if (player.Position === 'GKP') {
        gks.push(player);
      }
    }
    );
    
    const processedData = [
      { id: gks[0].P_ID, name: gks[0].FullName, position: gks[0].Position, club: gks[0].Club, home: gks[0].HomeTeamId, away: gks[0].AwayTeamId, starting: gks[0].Playing11, photo: gks[0].Photo, Availability: gks[0].Availability},
      { id: gks[1].P_ID, name: gks[1].FullName, position: gks[1].Position, club: gks[1].Club, home: gks[1].HomeTeamId, away: gks[1].AwayTeamId, starting: gks[1].Playing11, photo: gks[1].Photo, Availability: gks[1].Availability},
      { id: defs[0].P_ID, name: defs[0].FullName, position: defs[0].Position, club: defs[0].Club, home: defs[0].HomeTeamId, away: defs[0].AwayTeamId, starting: defs[0].Playing11, photo: defs[0].Photo, Availability: defs[0].Availability},
      { id: defs[1].P_ID, name: defs[1].FullName, position: defs[1].Position, club: defs[1].Club, home: defs[1].HomeTeamId, away: defs[1].AwayTeamId, starting: defs[1].Playing11, photo: defs[1].Photo, Availability: defs[1].Availability },
      { id: defs[2].P_ID, name: defs[2].FullName, position: defs[2].Position, club: defs[2].Club, home: defs[2].HomeTeamId, away: defs[2].AwayTeamId, starting: defs[2].Playing11, photo: defs[2].Photo, Availability: defs[2].Availability},
      { id: defs[3].P_ID, name: defs[3].FullName, position: defs[3].Position, club: defs[3].Club, home: defs[3].HomeTeamId, away: defs[3].AwayTeamId, starting: defs[3].Playing11, photo: defs[3].Photo , Availability: defs[3].Availability},
      { id: defs[4].P_ID, name: defs[4].FullName, position: defs[4].Position, club: defs[4].Club, home: defs[4].HomeTeamId, away: defs[4].AwayTeamId, starting: defs[4].Playing11, photo: defs[4].Photo , Availability: defs[4].Availability},
      { id: mids[0].P_ID, name: mids[0].FullName, position: mids[0].Position, club: mids[0].Club, home: mids[0].HomeTeamId, away: mids[0].AwayTeamId, starting: mids[0].Playing11, photo: mids[0].Photo , Availability: mids[0].Availability},
      { id: mids[1].P_ID, name: mids[1].FullName, position: mids[1].Position, club: mids[1].Club, home: mids[1].HomeTeamId, away: mids[1].AwayTeamId, starting: mids[1].Playing11, photo: mids[1].Photo , Availability: mids[1].Availability},
      { id: mids[2].P_ID, name: mids[2].FullName, position: mids[2].Position, club: mids[2].Club, home: mids[2].HomeTeamId, away: mids[2].AwayTeamId, starting: mids[2].Playing11, photo: mids[2].Photo, Availability: mids[2].Availability },
      { id: mids[3].P_ID, name: mids[3].FullName, position: mids[3].Position, club: mids[3].Club, home: mids[3].HomeTeamId, away: mids[3].AwayTeamId, starting: mids[3].Playing11, photo: mids[3].Photo , Availability: mids[3].Availability },
      { id: mids[4].P_ID, name: mids[4].FullName, position: mids[4].Position, club: mids[4].Club, home: mids[4].HomeTeamId, away: mids[4].AwayTeamId, starting: mids[4].Playing11, photo: mids[4].Photo  , Availability: mids[4].Availability},
      { id: fwds[0].P_ID, name: fwds[0].FullName, position: fwds[0].Position, club: fwds[0].Club, home: fwds[0].HomeTeamId, away: fwds[0].AwayTeamId, starting: fwds[0].Playing11, photo: fwds[0].Photo , Availability: fwds[0].Availability},
      { id: fwds[1].P_ID, name: fwds[1].FullName, position: fwds[1].Position, club: fwds[1].Club, home: fwds[1].HomeTeamId, away: fwds[1].AwayTeamId, starting: fwds[1].Playing11, photo: fwds[1].Photo , Availability: fwds[1].Availability},
      { id: fwds[2].P_ID, name: fwds[2].FullName, position: fwds[2].Position, club: fwds[2].Club, home: fwds[2].HomeTeamId, away: fwds[2].AwayTeamId, starting: fwds[2].Playing11, photo: fwds[2].Photo , Availability: fwds[2].Availability},
    ];


    return processedData;
  }

  


  let fc = 0, mc = 0, dc = 0, gc = 0;
  players.forEach(player => {
    if(player.position === 'FWD' && player.starting == 1)
      fc++;
    else if(player.position === 'MID' && player.starting == 1)
      mc++;
    else if(player.position === 'DEF' && player.starting == 1)
      dc++;
  });
    
  
    const PlayerBox = ({ player, onSubstitute }) => {
      return (
        <div className={`${styles.playerBox} ${styles[`playerBoxAvailable${player.Availability}`]}`}>
          <div className={styles.playerContent}>
          <b>
            <img src={player.photo} alt="Profile picture"
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                marginLeft: 10
          }}></img><br/>
  
            {player.name} <br/>
            {player.home} vs {player.away}</b>
          <button className={styles.subButton} onClick={() => handleSubstitute(player)}>Substitute</button>
          <button className={styles.subButton} onClick={() =>  handlePopupToggle(player.id)}>Player Info</button>
          </div>
        </div>
      );
    };
  
  
    //console.log(players);
  
    const [selectedPlayerToSubOut, setSelectedPlayerToSubOut] = useState(null);
  
    const handleSubstitute = (substitutePlayer) => {
      if (!selectedPlayerToSubOut) {
        // Cannot perform substitution without selecting both players
        setSelectedPlayerToSubOut(substitutePlayer);
        return;
      }

      if(selectedPlayerToSubOut.position === 'GKP' || substitutePlayer.position === 'GKP') {
        if(selectedPlayerToSubOut.position !== substitutePlayer.position) {
          setSelectedPlayerToSubOut(null);
          return;
        }
      }

      let subPossible = false;
      if(!(substitutePlayer.starting == 1 && selectedPlayerToSubOut.starting == 1)) {
        subPossible = true;
      }
      let tdc = dc, tmc = mc, tgc = gc, tfc = fc;

      if(subPossible) {
        if(substitutePlayer.starting == 1){
          if(substitutePlayer.position === 'DEF')
            tdc--;
          else if(substitutePlayer.position === 'MID')
            tmc--; 
          else if(substitutePlayer.position === 'FWD')
            tfc--; 
        }
        else if(substitutePlayer.starting == 0){
          if(substitutePlayer.position === 'DEF')
            tdc++;
          else if(substitutePlayer.position === 'MID')
            tmc++; 
          else if(substitutePlayer.position === 'FWD')
            tfc++; 
        }
        if(selectedPlayerToSubOut.starting == 1){
          if(selectedPlayerToSubOut.position === 'DEF')
            tdc--;
          else if(selectedPlayerToSubOut.position === 'MID')
            tmc--; 
          else if(selectedPlayerToSubOut.position === 'FWD')
            tfc--; 
        }
        else if(selectedPlayerToSubOut.starting == 0){
          if(selectedPlayerToSubOut.position === 'DEF')
            tdc++;
          else if(selectedPlayerToSubOut.position === 'MID')
            tmc++; 
          else if(selectedPlayerToSubOut.position === 'FWD')
            tfc++; 
        }

        if((tdc >= 3 && tdc <= 5) && (tmc >= 2 && tmc <= 5) && (tfc >= 1 && tfc <= 3))
          subPossible = true;
        else
          subPossible = false;

        if(subPossible  && (substitutePlayer.playing !== selectedPlayerToSubOut.playing)) {
          dc = tdc;
          mc = tmc;
          fc = tfc;
        }
        
      }
      
  
      if(subPossible) {
        let flag = false;
        const updatedPlayers = players.map((player) => {
          if(player === selectedPlayerToSubOut) {
            if(player.starting !== substitutePlayer.starting || flag) {
              if(player.starting == 1)
                player.starting = 0;
              else if(player.starting == 0)
                player.starting = 1;
              flag = true;
            }
            return substitutePlayer;
          } else if (player === substitutePlayer) {
            if(player.starting !== selectedPlayerToSubOut.starting || flag) {
              if(player.starting == 1)
                player.starting = 0;
              else if(player.starting == 0)
                player.starting = 1;
              flag = true;
            }
            return selectedPlayerToSubOut;
          }
          return player;
        });
    
        setPlayers(updatedPlayers);
        setSelectedPlayerToSubOut(null);
      }
      else
        setSelectedPlayerToSubOut(null);
      
    };
  
    //console.log(players);

    const handleSelectPlayerToSubOut = (player) => {
      setSelectedPlayerToSubOut(player);
    };


    const [formData, setFormData] = useState({
      teamId: '',
      playerId: '',
      starting: ''
    });

    const saveTeam = async() => {
      let updated = 0;
      
      try {
        const response = await fetch('/api/substitution', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id, players}),
        });
        
        const data = await response.json();
        if(data.success){
          alert('Team saved successfully');
          console.log("inside data success true");
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

    const statusPage = () => {
      router.push({
        pathname: '/status',
        query : { id, teamName, gameWeek } 
      });
    };


    const logOut = () => {
      localStorage.setItem('token', null);
      
      router.push({
          pathname: '/',
          // query: { id, teamName, gameWeek }
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
                      <a className={styles.currentpage}>My Team</a>
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
                      <a onClick={statusPage}>Status</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={logOut}>Log out</a>
                  </li>
              </ul>
          </div>
          <h2 className={styles.headings}> Gameweek {gameWeek} </h2>
          <h2 className={styles.headings}> {teamName} </h2>
          
        </div>


        <div className={styles.mainTeam}>
          <div className={styles.goalkeeper}>
            {players.filter(p => (p.position === 'GKP'&& p.starting === 1)).map( player => (
              <PlayerBox key={player.id} player={player} onSelect={handleSelectPlayerToSubOut} />
            ))}
          </div>
          <div className={styles.defenders}>
            {players.filter(p => (p.position === 'DEF' && p.starting == 1)).map((player) => (
              <PlayerBox key={player.id} player={player} onSelect={handleSelectPlayerToSubOut} />
            ))}
          </div>
          <div className={styles.midfielders}>
            {players.filter(p => (p.position === 'MID' && p.starting == 1)).map((player) => (
              <PlayerBox key={player.id} player={player} onSelect={handleSelectPlayerToSubOut} />
            ))}
          </div>
          <div className={styles.forwards}>
            {players.filter(p => (p.position === 'FWD' && p.starting == 1)).map((player) => (
              <PlayerBox key={player.id} player={player} onSelect={handleSelectPlayerToSubOut} />
            ))}
          </div>
          <div className={styles.bench}>
            {players.filter(p => (p.starting == 0)).map((player) => (
              <PlayerBox key={player.id} player={player} onSelect={handleSubstitute} />
            ))}
          </div>
          <button className={styles.buttons} onClick={saveTeam}>
            Save Team
          </button>

          {isPopupVisible && <Popup onClose={handlePopupToggle} playerId={selectedPlayerId} />}


        </div>
      </div>
    );
  
  
  


};

export default mainPage;