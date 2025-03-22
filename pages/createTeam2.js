import React, { useEffect, useState } from 'react';
import Transfer from './transfer';
import { useRouter } from 'next/router';
import styles from './createTeam.module.css';
import Popup from './popUp';
import Head from 'next/head';
import Image from 'next/image';

const CreateTeam = () => {
  
  const router = useRouter();
  
  const id = router.query.id;
  const teamName = router.query.teamName;
  const gameWeek = router.query.gameWeek;

  const [remainingBalance, setRemainingBalance] = useState(parseFloat('100'));
  const [teamValue, setTeamValue] = useState(parseFloat('0'));
  const [playerBoxes, setPlayerBoxes] = useState(Array(15).fill(null));
  const [boxIndex, setBoxIndex] = useState(null);

  const [boxPosition, setBoxPosition] = useState(null);
  const [isTransferOpen, setIsTransferOpen] = useState(true); // State to control the Transfer component
  const [goalkeepers, setGoalkeepers] = useState(Array(2).fill(null));

  const [defenders, setDefenders] = useState(Array(5).fill(null));

  const [midfielders, setMidfielders] = useState(Array(5).fill(null));

  const [forwards, setForwards] = useState(Array(3).fill(null));


  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = (id) => {
    if(id !== 0)
      setSelectedPlayerId(id);
    setIsPopupVisible(!isPopupVisible);
  };



  const PlayerBox = ({position, player, index, onClick }) => {
    if(player === null) {
        return (
            <div className={styles.playerBox} onClick={onClick}>
              <b><small>
                {position}
                {index+1}
                <br/>
              </small></b>
            </div>
          );
    }
    else {
        return (
            <div className={`${styles.playerBox} ${styles[`playerBoxAvailable${player.Availability}`]}`} onClick={onClick}>
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
                {player.Price}m
              </b>
              <button onClick={() => removePlayer(player, position, index)}>Remove</button>
              <button className={styles.subButton} onClick={() =>  handlePopupToggle(player.P_ID)}>Player Info</button>
              </div>
            </div>
        );
    }
    
  };


  useEffect(() => {
    handlePlayerBoxClick(boxPosition, boxIndex);
  }, [boxIndex]);











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






  const removePlayer = (player, position, index) => {
    if(position === 'GKP') {
      const tempGks = [...goalkeepers];
      tempGks[index] = null;
      setGoalkeepers(tempGks);
      const tempPlayers = [...playerBoxes];
      tempPlayers[index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'FWD') {
      const tempFwds = [...forwards];
      tempFwds[index] = null;
      setForwards(tempFwds);
      const tempPlayers = [...playerBoxes];
      tempPlayers[12 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'MID') {
      const tempMids = [...midfielders];
      tempMids[index] = null;
      setMidfielders(tempMids);
      const tempPlayers = [...playerBoxes];
      tempPlayers[7 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'DEF') {
      const tempDefs = [...defenders];
      tempDefs[index] = null;
      setDefenders(tempDefs);
      const tempPlayers = [...playerBoxes];
      tempPlayers[2 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    setRemainingBalance(remainingBalance => remainingBalance+player.Price);
    setTeamValue(teamValue => teamValue-player.Price);

  }


  const handlePlayerBoxClick = (position , index) => {

    
    console.log(boxIndex,  boxPosition, 'clicked', isTransferOpen);
  };

  const isTranferPossible = (player) => {
    let possible = true;
    let count = 0;
    let posCount = 0;
    playerBoxes.map(p => {
      if(p !== null) {
        if(p.P_ID === player.P_ID) {
          alert('Player already in your team');
          possible = false;
        }
        if(p.Club === player.Club) {
          count++;
        }
        if(p.Position === player.Position) {
          posCount++;
        }

      }
    });

    if(count >= 3) {
      alert('More than 3 players from the same club is not allowed');
      possible = false;
    }

    if(
        (player.Position === 'GKP' && posCount >= 2) || (player.Position === 'DEF' && posCount >= 5) ||
        (player.Position === 'MID' && posCount >= 5) || (player.Position === 'FWD' && posCount >= 3)
      ) {
      alert('No blank space in its position');
      possible = false;
    }


    if(remainingBalance < player.Price) {
      alert('Not enough balance');
      possible = false;
    }

    return possible;
  }

  const [transferDone, setTransferDone] = useState(parseInt('0'));
  const [availabeTransfer, setAvailableTransfer] = useState(9999);
  const [transferCost, setTransferCost] = useState(parseInt('0'));
  
  const saveTeam = async() => {
    let IsComplete = true;
    playerBoxes.map(p => {
      if(p === null) {
        alert('Please complete the Team first');
        IsComplete = false;
      }
    });

    if(IsComplete) {
      try {
        const response = await fetch('/api/saveCreatedTeam', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id, playerBoxes, teamValue, remainingBalance, transferCost, availabeTransfer, transferDone, gameWeek }),
        });
        
        const data = await response.json();
        if(data.success){
          router.push({
            pathname: '/mainPage',
            query : { id, teamName, gameWeek } 
          });
        }
      }
      catch (error) {
        console.error(error);
      }

    }

  }



  const handleTransferComplete = (player) => {
    
    if(isTranferPossible(player)) {
      if(player.Position === 'GKP') {
        const tempGks = [...goalkeepers];
        let ourIndex = 0;
        while(goalkeepers[ourIndex] !== null)
          ourIndex++;
        tempGks[ourIndex] = player;
        setGoalkeepers(tempGks);
        const tempPlayers = [...playerBoxes];
        tempPlayers[ourIndex] = player;
        setPlayerBoxes(tempPlayers);
      }
      else if(player.Position === 'FWD') {
        const tempFwds = [...forwards];
        let ourIndex = 0;
        while(forwards[ourIndex] !== null)
          ourIndex++;
        tempFwds[ourIndex] = player;
        setForwards(tempFwds);
        const tempPlayers = [...playerBoxes];
        tempPlayers[12 + ourIndex] = player;
        setPlayerBoxes(tempPlayers);
      }
      else if(player.Position === 'MID') {
        const tempMids = [...midfielders];
        let ourIndex = 0;
        while(midfielders[ourIndex] !== null)
          ourIndex++;
        tempMids[ourIndex] = player;
        setMidfielders(tempMids);
        const tempPlayers = [...playerBoxes];
        tempPlayers[7 + ourIndex] = player;
        setPlayerBoxes(tempPlayers);
      }
      else if(player.Position === 'DEF') {
        const tempDefs = [...defenders];
        let ourIndex = 0;
        while(defenders[ourIndex] !== null)
          ourIndex++;
        tempDefs[ourIndex] = player;
        setDefenders(tempDefs);
        const tempPlayers = [...playerBoxes];
        tempPlayers[2 + ourIndex] = player;
        setPlayerBoxes(tempPlayers);
      }
      setRemainingBalance(remainingBalance => remainingBalance-player.Price);
      setTeamValue(teamValue => teamValue+player.Price);
    }
  };

  return (
    <div className={styles.teamContainer}>

      <Head>
        <title>FPL</title> {/* Set the title to "FPL" */}
        <link rel="icon" href="/fpl_logo.png" /> {/* Set the favicon */}
      </Head>
      <div className={styles.heads}>
       <p> Balance : {remainingBalance}m </p><p> Team value : {teamValue}m</p>
      </div>
      <div className={styles.line}>
      {goalkeepers.map((player, index) => (
        <PlayerBox
          key={`GKP-${index}`}
          index={index}
          position="GKP"
          player={player}
          onClick={() => handlePlayerBoxClick('GKP', index)}
        />
      ))}
      </div>

      <div className={styles.line}>
        {defenders.map((player, index) => (
          <PlayerBox
            key={`DEF-${index}`}
            index={index}
            position="DEF"
            player={player}
            onClick={() => handlePlayerBoxClick('DEF', index)}
          />
        ))}
      </div>

      <div className={styles.line}>
        {midfielders.map((player, index) => (
          <PlayerBox
            key={`MID-${index}`}
            index={index}
            position="MID"
            player={player}
            onClick={() => handlePlayerBoxClick('MID', index)}
          />
        ))}
      </div>

      <div className={styles.line}>
        {forwards.map((player, index) => (
          <PlayerBox
            key={`FWD-${index}`}
            index={index}
            position="FWD"
            player={player}
            onClick={() => handlePlayerBoxClick('FWD', index)}
          />
        ))}
      </div>

      <button className={styles.buttons} onClick={saveTeam}>
            Save Team
      </button>

      {isPopupVisible && <Popup onClose={handlePopupToggle} playerId={selectedPlayerId} />}


      {isTransferOpen && (
        <Transfer
          onTransferComplete={handleTransferComplete}
          gameWeek={gameWeek}
        />
      )}


    
  
    </div>
  );
};

export default CreateTeam;