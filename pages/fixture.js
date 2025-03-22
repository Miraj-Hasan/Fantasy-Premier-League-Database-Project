import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './fixtures.module.css';
import GamesList from '../pages/gamelist';

function fixturePage() {
    const [games, setGames] = useState({
        HomeTeamId: '',
        AwayTeamId: '',
        FixtureId: '',
        GameWeekId: '',
        HomeTeamLogo: '',
        AwayTeamLogo: '',
        HomeTeamScore: '',
        AwayTeamScore: ''

    });
    const router = useRouter();

    const gameWeek = router.query.gameWeek;
    const id = router.query.id;
    const teamName = router.query.teamName;
    const tempId = router.query.id;


    const [GameWeek, setGameWeek] = useState(gameWeek);


    const fetchFunc = async () => {

        try {
            const response = await fetch(`/api/fixture?gameWeekId=${GameWeek}`);

            const jsonData = await response.json();
            
            if (jsonData.success) {
                //console.log(jsonData.result)
                setGames(jsonData.result);
            }

        }
        catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchFunc();
    }, [GameWeek]);








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

      const pickTeam = () => {
        router.push({
          pathname: '/mainPage',
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
        <div className={styles.backGround}>


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
                            <a className={styles.currentpage}>Fixtures</a>
                        </li>
                        <li className={styles.options}>
                            <a onClick={transfer}>Transfer</a>
                        </li>
                        <li className={styles.options}>
                            <a onClick={statusPage}>Status</a>
                        </li>
                    </ul>
                </div>
            </div>




            <h1 align='center'>Game Fixtures </h1>
            <div className={styles.fixtureList}>
            <GamesList games={games} GameWeekId={GameWeek} />
            <button onClick={() => setGameWeek(parseInt(GameWeek) - 1)} className={styles.buttonPrev}>Prev</button>
            <button onClick={() => setGameWeek(parseInt(GameWeek) + 1)} className={styles.buttonNext}>Next</button>
        </div>
        </div>
    );

}


export default fixturePage;