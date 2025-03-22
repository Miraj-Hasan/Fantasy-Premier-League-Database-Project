import React, { useEffect, useState } from 'react';
import Transfer from './transfer';
import { useRouter } from 'next/router';
import styles from './transfer.module.css';
import Popup from './popUp';
import Head from 'next/head';
import Image from 'next/image';

const CreateTeam = () => {
  
  const router = useRouter();
  
  const id = router.query.id;
  const teamName = router.query.teamName;
  const gameWeek = router.query.gameWeek;
  const tempId = router.query.id;

  const [teamPlayers, setTeamPlayers] = useState(Array(15).fill(null));

  const [transferDone, setTransferDone] = useState(parseInt('0'));
  const [availabeTransfer, setAvailableTransfer] = useState(null);
  const [transferCost, setTransferCost] = useState(parseInt('0'));

  const [teamValue, setTeamValue] = useState(null);
  const [remainingBalance, setRemainingBalance] = useState(null);
  const [playerBoxes, setPlayerBoxes] = useState(Array(15).fill(null));

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
    async function fetchBalance() {
      try {
        const response = await fetch(`/api/balance?userId=${id}`);
        const data = await response.json();
        try{
          setTeamValue(data.balances[0].TeamValue);
          setRemainingBalance(data.balances[0].TeamBalance);
          setAvailableTransfer(data.balances[0].TransferAvailable);
        }
        catch(error)
        {
          console.log("balance data not arrived");
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function fetchData() {
        try {
          const response = await fetch(`/api/gwTransfer?userId=${id}`);
          const data = await response.json();
          try{
            setTeamPlayers(data.players);
            setPlayerBoxes(data.players);
            setGoalkeepers(data.players.slice(8,10));
            setDefenders(data.players.slice(0,5));
            setMidfielders(data.players.slice(10,15));
            setForwards(data.players.slice(5,8));
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
    fetchBalance();
    
  }, [id]);


 


  

  const PlayerBox = ({position, player, index}) => {
    if(player === null) {
        return (
            <div className={styles.playerBox}>
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
                {player.Price}m
              </b>
              <button className={styles.subButton} onClick={() => removePlayer(player, position, index)}>Remove</button>
              <button className={styles.subButton} onClick={() =>  handlePopupToggle(player.P_ID)}>Player Info</button>
              </div>
            </div>
        );
    }
    
  };



  useEffect(() => {
    async function handleCosts() {
      let transfers = 15;
      {teamPlayers && teamPlayers.forEach(p => 
      {
        playerBoxes.forEach(plyr => {
          if(plyr !== null && p.P_ID === plyr.P_ID)
              transfers--;
        })
      });}
      setTransferDone(transfers);
      console.log(availabeTransfer);
      if(transfers > availabeTransfer) {
        setTransferCost((availabeTransfer-transfers) * 4);
      }
      else 
        setTransferCost(0);
      
    }
    handleCosts();
  },[playerBoxes])




  const removePlayer = async(player, position, index) => {
    //console.log('position', position, index, player);
    if(position === 'GKP') {
      const tempGks = [...goalkeepers];
      tempGks[index] = null;
      setGoalkeepers(tempGks);
      const tempPlayers = [...playerBoxes];
      tempPlayers[8 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'FWD') {
      const tempFwds = [...forwards];
      tempFwds[index] = null;
      setForwards(tempFwds);
      const tempPlayers = [...playerBoxes];
      tempPlayers[5 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'MID') {
      const tempMids = [...midfielders];
      tempMids[index] = null;
      setMidfielders(tempMids);
      const tempPlayers = [...playerBoxes];
      tempPlayers[10 + index] = null;
      setPlayerBoxes(tempPlayers);
    }
    if(position === 'DEF') {
      const tempDefs = [...defenders];
      tempDefs[index] = null;
      setDefenders(tempDefs);
      const tempPlayers = [...playerBoxes];
      tempPlayers[index] = null;
      setPlayerBoxes(tempPlayers);
    }
    setTeamValue(teamValue => teamValue-player.Price);
    setRemainingBalance(remainingBalance => remainingBalance+player.Price);



  }


  // Callback to be called when the transfer is complete
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
    else if(
        (player.Position === 'GKP' && posCount >= 2) || (player.Position === 'DEF' && posCount >= 5) ||
        (player.Position === 'MID' && posCount >= 5) || (player.Position === 'FWD' && posCount >= 3)
      ) {
      alert('No blank space in its position');
      possible = false;
    }
    else if(remainingBalance < player.Price) {
      alert('Not enough balance');
      possible = false;
    }

    return possible;
  }
  
  
  
  const handleTransferComplete = async(player) => {
    
    if(isTranferPossible(player)) {
      if(player.Position === 'GKP') {
        const tempGks = [...goalkeepers];
        let ourIndex = 0;
        while(goalkeepers[ourIndex] !== null)
          ourIndex++;
        tempGks[ourIndex] = player;
        setGoalkeepers(tempGks);
        const tempPlayers = [...playerBoxes];
        tempPlayers[8 + ourIndex] = player;
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
        tempPlayers[5 + ourIndex] = player;
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
        tempPlayers[10 + ourIndex] = player;
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
        tempPlayers[ourIndex] = player;
        setPlayerBoxes(tempPlayers);
      } 
    

    setRemainingBalance(remainingBalance => remainingBalance-player.Price);
    setTeamValue(teamValue => teamValue+player.Price);
    alert(player.FullName + ' transferred in to your team' );
    
        
    }
  };



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
          body: JSON.stringify({id, playerBoxes, teamValue, remainingBalance, transferCost, availabeTransfer, transferDone, gameWeek}),
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


  const statusPage = () => {
    router.push({
      pathname: '/status',
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
                      <a className={styles.currentpage}>Transfer</a>
                  </li>
                  <li className={styles.options}>
                      <a onClick={statusPage}>Status</a>
                  </li>
              </ul>
          </div>
          <h2 className={styles.headings}> {teamName} </h2>
          
        </div>
  



      <div className={styles.balances}>
          <h2>Balance : {remainingBalance}m </h2>
          <h2> Team value: {teamValue}m  </h2>
          <h2>Transfers: {transferDone}  </h2>
          <h2> Cost: {transferCost} Points</h2>
      </div>
      <div className={styles.line}>
      {goalkeepers.map((player, index) => (
        <PlayerBox
          key={`GKP-${index}`}
          index={index}
          position="GKP"
          player={player}
          
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


    
      {/* ... other code */}
    </div>
  );
};

export default CreateTeam;