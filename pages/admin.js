import React, { useState, useEffect } from 'react';
import styles from './transfer.module.css';
import Popup from './popUp';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import CustomDatePicker from './DatePicker';

const Admin = () => {

  const router = useRouter();
  
  const gameWeek = router.query.gameWeek;

  const [sortingCriteria, setSortingCriteria] = useState('Price'); // Sorting criteria
  const [availablePlayers, setAvailablePlayers] = useState([]); // List of players based on sorting
  const [playerPosition, setPlayerPosition] = useState('DEF');
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Selected player for transfer
  const [inputName, setInputName] = useState('');
  const [lowPrice, setLowPrice] = useState('4.0');
  const [highPrice, setHighPrice] = useState('14.0');
  const [selectedPlayerPrice, setSelectedPlayerPrice] = useState(0);
  const [actualPrice, setActualPrice] = useState(0);
  const [actualAvailability, setActualAvailability] = useState(0);
  const [selectedAvailability, setSelectedAvailability] = useState(100);
  const [actualClub, setActualClub] = useState(null);
  const [selectedClub, setSelectedClub] = useState('ARS');
  const [playerId, setPlayerId] = useState(0);
  const [reload, setReload] = useState(false);


  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = (id) => {
    if(id !== 0)
      setSelectedPlayerId(id);
    setIsPopupVisible(!isPopupVisible);
  };



  const fetchData = async() => {
    try {
      
      const response = await fetch(`/api/createTeam2?position=${playerPosition}&sorting=${sortingCriteria}&searchText=${inputName}&minPrice=${lowPrice}&maxPrice=${highPrice}`);
      const data = await response.json();
      
      try{
          setAvailablePlayers(data.players);
      }
      catch(error)
      {
        console.log("data not arrived");
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }  



  useEffect(() => {
    fetchData();
  },[sortingCriteria, playerPosition, inputName, lowPrice, highPrice, reload]);




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



 
  const handlePlayerSelection = (player) => {
    setSelectedPlayer(player);
    setActualPrice(player.Price);
    setActualAvailability(player.Availability);
    setPlayerId(player.P_ID);
    setActualClub(player.Club);
  };








  const [timestamp, setTimestamp] = useState(new Date()); 
  //const [isLoading, setIsLoading] = useState(true);
  const [gwInfos, setGwInfos] = useState(null);

  const [selectedGW, setSelectedGW] = useState(1);

  useEffect(() => {
    
    async function fetchTimeStamp() {
      try {
        const response = await fetch(`/api/getTimeStamp`);
        const data = await response.json();

        try{
          setGwInfos(data.gwInfo);
        }
        catch(error)
        {
          console.log("data not arrived");
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    
    }


    fetchTimeStamp();
    //setIsLoading(false);
  }, [timestamp]);

  const handleTimestampChange = async() => {

    if(selectedGW < gameWeek+1) {
      alert('Sorry, you cant change the past');
      return;
    }

    try {
      const response = await fetch('/api/setTime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({selectedGW, timestamp}),
      });
      
      const data = await response.json();
      if(!data.success) {
          alert(data.message);
      }
      else {
        alert('Updated successfully');
      }
          
      
    }
    catch (error) {
      console.error(error);
    }
  };









    const setPrice = async() => {
        if(actualPrice === selectedPlayerPrice) {
            alert('At first change the price');
            return;
        }
        try {
            const response = await fetch('/api/setPrice', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({playerId, selectedPlayerPrice}),
            });
            
            const data = await response.json();
            if(data.success) {
                setActualPrice(selectedPlayerPrice);
                setReload(!reload);
                alert('Price updated successfully');
            }
                
            
          }
          catch (error) {
            console.error(error);
          }
    };


    const setAvail = async() => {
        if(actualAvailability === selectedAvailability) {
            alert('At first change the availability');
            return;
        }
        try {
            const response = await fetch('/api/setAvail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({playerId, selectedAvailability}),
            });
            
            const data = await response.json();
            if(data.success) {
                setActualAvailability(selectedAvailability);
                setReload(!reload);
                alert('Availability updated successfully');
            }
                
            
          }
          catch (error) {
            console.error(error);
          }
    };


    const setClub = async() => {
        if(actualClub === selectedClub) {
            alert('At first change the Club');
            return;
        }
        try {
            const response = await fetch('/api/setClub', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({playerId, selectedClub}),
            });
            
            const data = await response.json();
            if(data.success) {
                setActualClub(selectedClub);
                setReload(!reload);
                alert('Club updated successfully');
            }
                
            
          }
          catch (error) {
            console.error(error);
          }
    };






    const logOut = () => {
      localStorage.setItem('token', null);
      
      router.push({
          pathname: '/',
      });
    };







  return (
    <div className={styles.teamContainer}>
      
      <Head>
        <title>FPL</title> {/* Set the title to "FPL" */}
        <link rel="icon" href="/fpl_logo.png" /> {/* Set the favicon */}
      </Head>
      <div>
        <h2 className={styles.headings}>Change Gameweek Date</h2>
        <div>


    
        <label className={styles.label} htmlFor="GameWeek"> Gameweek </label>
        <select className={styles.selects}
          value={selectedGW}
          name="GameWeek"
          onChange={(e) => { setSelectedGW(e.target.value); setTimestamp(new Date(gwInfos[e.target.value-1].StartDate)); }}
        >
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7"> 7 </option>
          <option value="8"> 8 </option>
          <option value="9"> 9 </option>
          <option value="10"> 10 </option>
      
          {/* Other sorting options */}
        </select>

        <button className={styles.button1} onClick={logOut}>Log out</button>



          <h4 className={styles.text}>Selected Timestamp: {timestamp.toLocaleString()}</h4>
          <div className={styles.datePicker}>
          <CustomDatePicker
          
            selectedDate={timestamp}
            handleDateChange={(date) => setTimestamp(date)}
          />
          <button onClick={handleTimestampChange}>Set Timestamp</button> </div>
        </div>




      </div>





      <br/><br/><br/>
    <div>
      <h2 className={styles.headings}>Change Player Info</h2>
      <label className={styles.label} htmlFor="sortBy"> Sort By </label>
      <select className={styles.selects}
        value={sortingCriteria}
        name="sortBy"
        onChange={(e) => setSortingCriteria(e.target.value)}
      >
        <option value="Price">Price</option>
        <option value="Goals">Goals</option>
        <option value="Points">Points</option>
        <option value="Assists">Assists</option>
        <option value="SelectedBy">Team selected</option>
        <option value="Club">Club</option>
        <option value="CleanSheet">CleanSheet</option>
        <option value="minutesPlayed">Minutes Played</option>
        <option value="ShotsTaken">Shots</option>
        <option value="ChancesCreated">Chances Created</option>
        <option value="Saves">Saves</option>
        <option value="RedCard">Red Card</option>
        <option value="YellowCard">Yellow Card</option>
        <option value="GoalsConceded">Goals Conceded</option>
        <option value="OwnGoal">Own Goal</option>
        <option value="PenaltySaved">Penalty Saved</option>
        <option value="PenaltyMissed">Penalty Missed</option>

        {/* Other sorting options */}
      </select>

      <label className={styles.label} htmlFor="positions"> Position </label>
      <select className={styles.selects}
        value={playerPosition}
        name="positions"
        onChange={(e) => setPlayerPosition(e.target.value)}
      >
        <option value="GKP">Goalkeepers</option>
        <option value="DEF">Defenders</option>
        <option value="MID">Midfielders</option>
        <option value="FWD">Forwards</option>
        {/* Other sorting options */}
      </select>

      <label className={styles.label} htmlFor="LowPrice"> Min price </label>
      <select className={styles.selects}
        value={lowPrice}
        name="LowPrice"
        onChange={(e) => setLowPrice(e.target.value)}
      >
        <option value="4.0">4.0</option>
        <option value="4.5">4.5</option>
        <option value="5.0">5.0</option>
        <option value="5.5">5.5</option>
        <option value="6.0">6.0</option>
        <option value="6.5">6.5</option>
        <option value="7.0">7.0</option>
        <option value="7.5">7.5</option>
        <option value="8.0">8.0</option>
        <option value="8.5">8.5</option>
        <option value="9.0">9.0</option>
        <option value="9.5">9.5</option>
        <option value="10.0">10.0</option>
        <option value="10.5">10.5</option>
        <option value="11.0">11.0</option>
        <option value="11.5">11.5</option>
        <option value="12.0">12.0</option>
        <option value="12.5">12.5</option>
        <option value="13.0">13.0</option>
        <option value="13.5">13.5</option>
        <option value="14.0">14.0</option>
        {/* Other sorting options */}
      </select>

      <label className={styles.label} htmlFor="HighPrice"> Max price </label>
      <select className={styles.selects}
        value={highPrice}
        name="HighPrice"
        onChange={(e) => setHighPrice(e.target.value)}
      >
        <option value="4.0">4.0</option>
        <option value="4.5">4.5</option>
        <option value="5.0">5.0</option>
        <option value="5.5">5.5</option>
        <option value="6.0">6.0</option>
        <option value="6.5">6.5</option>
        <option value="7.0">7.0</option>
        <option value="7.5">7.5</option>
        <option value="8.0">8.0</option>
        <option value="8.5">8.5</option>
        <option value="9.0">9.0</option>
        <option value="9.5">9.5</option>
        <option value="10.0">10.0</option>
        <option value="10.5">10.5</option>
        <option value="11.0">11.0</option>
        <option value="11.5">11.5</option>
        <option value="12.0">12.0</option>
        <option value="12.5">12.5</option>
        <option value="13.0">13.0</option>
        <option value="13.5">13.5</option>
        <option value="14.0">14.0</option>
        {/* Other sorting options */}
      </select>

      <label className={styles.label} htmlFor="nameField"> Search </label>
      <input className={styles.selects}
        type="text"
        name="nameField"
        value={inputName}
        onChange={(e) => {
          const input = e.target.value;
          setInputName(input);
        }}
      />
      <br/><br/>


      {selectedPlayer && ( 
        <div>
          <p className={styles.texts}>Selected player: {selectedPlayer.FullName}</p>
          
          <label className={styles.label} htmlFor="Price"> Price </label>
        <select className={styles.selects}
            value={selectedPlayerPrice}
            name="Price"
            onChange={(e) => setSelectedPlayerPrice(parseFloat(e.target.value))}
        >
            <option value={actualPrice}>{actualPrice.toFixed(1)}m</option>
            <option value={actualPrice + 0.1}>{(actualPrice + 0.1).toFixed(1)}m</option>
            <option value={actualPrice + 0.2}>{(actualPrice + 0.2).toFixed(1)}m</option>
            <option value={actualPrice - 0.1}>{(actualPrice - 0.1).toFixed(1)}m</option>
            <option value={actualPrice - 0.2}>{(actualPrice - 0.2).toFixed(1)}m</option>
            {/* Other sorting options */}
        </select>
         <button className={styles.sets} onClick={setPrice}>Set</button>

         <label className={styles.label} htmlFor="Availability"> Availability </label>
                <select className={styles.selects}
                    value={selectedAvailability}
                    name="Availability"
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                >
                    <option value='100'>100%</option>
                    <option value='75'>75%</option>
                    <option value='50'>50%</option>
                    <option value='25'>25%</option>
                    <option value='0'>0%</option>
                    {/* Other sorting options */}
         </select>
         <button className={styles.sets} onClick={setAvail}>Set</button>



         <label className={styles.label} htmlFor="Club"> Club </label>
                <select className={styles.selects}
                    value={selectedClub}
                    name="Club"
                    onChange={(e) => setSelectedClub(e.target.value)}
                >
                    <option value='ARS'>ARS</option>
                    <option value='AVL'>AVL</option>
                    <option value='BOU'>BOU</option>
                    <option value='BRE'>BRE</option>
                    <option value='BHA'>BHA</option>
                    <option value='BUR'>BUR</option>
                    <option value='CHE'>CHE</option>
                    <option value='CRY'>CRY</option>
                    <option value='EVE'>EVE</option>
                    <option value='FUL'>FUL</option>
                    <option value='LIV'>LIV</option>
                    <option value='LUT'>LUT</option>
                    <option value='MCI'>MCI</option>
                    <option value='MUN'>MUN</option>
                    <option value='NEW'>NEW</option>
                    <option value='NFO'>NFO</option>
                    <option value='SHU'>SHU</option>
                    <option value='TOT'>TOT</option>
                    <option value='WHU'>WHU</option>
                    <option value='WOL'>WOL</option>
                    
                    {/* Other sorting options */}
         </select>
         <button className={styles.sets} onClick={setClub}>Set</button>




        </div>
      )}

      

      {/* List of available players */}
      <br/><br/><br/>
      <div className={styles.playerList}>
      
        {availablePlayers.map((player) => (
          <div key={player.P_ID} className={`${styles.playerBox} ${styles[`playerBoxAvailable${player.Availability}`]}`} onClick={() => handlePlayerSelection(player)}>
            <img src={player.Photo} alt="Profile picture"
                style={{
                    width: 80,
                    height: 80,
                    marginRight: 10,
                    marginLeft: 10
            }}></img><br/><small><b>
            {player.FullName} ({player.Price}m)<br/>
            {player.Club} ({player.Position})<br/>
            {sortingCriteria}: {player.Criteria}</b></small><br/>
            <button className={styles.subButton} onClick={() =>  handlePopupToggle(player.P_ID)}>Player Info</button>
          </div>
        ))}
        
      </div>


      {/* Selected player for transfer */} 
      {isPopupVisible && <Popup onClose={handlePopupToggle} playerId={selectedPlayerId} />}
      </div>
    </div>
  );
};

export default Admin;