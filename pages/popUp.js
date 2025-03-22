import React, { useState, useEffect } from 'react';
import styles from './popUp.module.css';

const Popup = ({ onClose, playerId }) => {

  const [gwStats, setGwstats] = useState(null);



  const fetchData = async() => {
    try {
      const response = await fetch(`/api/playerStats?playerId=${playerId}`);
      const data = await response.json();

      try{
          setGwstats(data.stats);
      }
      catch(error)
      {
        console.log("data not arrived");
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };


  


    


  useEffect(() => {
    fetchData();
    
  },[]);






  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <span className={styles.close} onClick={() => onClose(0)}>&times;</span>
        {gwStats !== null &&
        <div>
            <img src={gwStats[0].Photo} alt="Profile picture"
              style={{
                width: 80,
                height: 80,
                marginRight: 10,
                marginLeft: 10
          }}></img><br/>
          <b>
            {gwStats[0].FirstName} {gwStats[0].LastName} ({gwStats[0].Price}m)<br/>
             {gwStats[0].Position}, {gwStats[0].Club} <br/></b>
            <table className={styles.table}>
                <thead className={styles.heading}><tr>
                    <th>Gw</th><th>Home</th><th>vs</th><th>Away</th><th>Pts</th><th>Mp</th><th>Gs</th><th>A</th><th>Cs</th><th>Yc</th><th>Rc</th><th>St</th><th>Cc</th><th>Ps</th><th>Pm</th><th>Og</th><th>S</th><th>Gc</th>
                </tr></thead>
            <tbody>
            {gwStats.map((stat) => {
                return <tr>
                    <td>{stat.GameWeekId}</td><td>{stat.HomeTeamId} </td><td>{stat.HomeTeamScore} - {stat.AwayTeamScore}</td><td> {stat.AwayTeamId}</td><td>{stat.Points}</td><td>{stat.minutesPlayed}</td><td>{stat.Goals}</td><td>{stat.Assists}</td><td>{stat.CleanSheet}</td><td>{stat.YellowCard}</td><td>{stat.RedCard}</td><td>{stat.ShotsTaken}</td><td>{stat.ChancesCreated}</td><td>{stat.PenaltySaved}</td><td>{stat.PenaltyMissed}</td><td>{stat.OwnGoal}</td><td>{stat.Saves}</td><td>{stat.GoalsConceded}</td>
                </tr>
            }
            )}
            </tbody>
            </table>
        </div>}
      </div>
    </div>
  );
};

export default Popup;