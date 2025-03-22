import React, { useState, useEffect } from 'react';
import styles from './transfer.module.css';
import Popup from './popUp';

const Transfer = ({onTransferComplete, gameWeek }) => {
  const [sortingCriteria, setSortingCriteria] = useState('Price'); // Sorting criteria
  const [availablePlayers, setAvailablePlayers] = useState([]); // List of players based on sorting
  const [playerPosition, setPlayerPosition] = useState('DEF');
  const [selectedPlayer, setSelectedPlayer] = useState(null); // Selected player for transfer
  const [inputName, setInputName] = useState('');
  const [lowPrice, setLowPrice] = useState('4.0');
  const [highPrice, setHighPrice] = useState('14.0');


  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = (id) => {
    if(id !== 0)
      setSelectedPlayerId(id);
    setIsPopupVisible(!isPopupVisible);
  };



  const fetchData = async() => {
    try {
      
      const response = await fetch(`/api/createTeam2?position=${playerPosition}&sorting=${sortingCriteria}&searchText=${inputName}&minPrice=${lowPrice}&maxPrice=${highPrice}&gameWeek=${gameWeek}`);
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
  },[sortingCriteria, playerPosition, inputName, lowPrice, highPrice]);


  

 
  const handlePlayerSelection = (player) => {
    setSelectedPlayer(player);
  };

  const handleTransfer = () => {
    
    onTransferComplete(selectedPlayer);
  };

  return (
    <div >
      {/* Dropdown for sorting criteria */}
      <br/><br/><br/>

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
        <div >
          <p className={styles.texts}>Selected player : {selectedPlayer.FullName} </p>
          <button className={styles.buttons} onClick={handleTransfer}>Transfer</button>
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
  );
};

export default Transfer;