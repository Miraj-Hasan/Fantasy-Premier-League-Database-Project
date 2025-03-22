import React from "react";

function GamesList({ games, GameWeekId }) {
    //console.log(games.GameWeekId);
    return (
        <div>
            {games.length > 0 ? (
                <div>
                    <h2 align='center'>   Gameweek {GameWeekId} </h2>

                    <ul style={{
                        listStyle: 0,
                        padding: 0
                    }}>
                        {games.map(game => (
                            <li key={game.FixtureId} alignItems='center'>
                                {game.HomeTeamScore === -1 ? (
                                    <pre>

                                        <h3 style={{
                                            display: 'flex',
                                            alignItems: 'center', /* Vertically align items */
                                            justifyContent: 'center'
                                        }}>

                                            <img src={game.HomeTeamLogo}
                                                alt="logo"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    verticalAlign: 'center', /* Align images vertically in the middle */
                                                    marginRight: 10,
                                                    marginLeft: 10
                                                }}
                                            />

                                            {game.HomeTeamId}     -     {game.AwayTeamId}

                                            <img src={game.AwayTeamLogo}
                                                alt="logo"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    verticalAlign: 'center', /* Align images vertically in the middle */
                                                    marginRight: 10,
                                                    marginLeft: 10
                                                }}
                                            />
                                        </h3>

                                    </pre>
                                ) : (
                                    <pre>
                                        <h3 style={{
                                            display: 'flex',
                                            alignItems: 'center', /* Vertically align items */
                                            justifyContent: 'center'
                                        }}>

                                            <img src={game.HomeTeamLogo}
                                                alt="logo"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    verticalAlign: 'center', /* Align images vertically in the middle */
                                                    marginRight: 10,
                                                    marginLeft: 10
                                                }}
                                            />

                                            {game.HomeTeamId}     {game.HomeTeamScore} - {game.AwayTeamScore}     {game.AwayTeamId}

                                            <img src={game.AwayTeamLogo}
                                                alt="logo"
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    verticalAlign: 'center', /* Align images vertically in the middle */
                                                    marginRight: 10,
                                                    marginLeft: 10
                                                }}
                                            />
                                        </h3>
                                    </pre>
                                )
                                }

                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No games available for gameweek {GameWeekId}.</p>
            )
            }
        </div >
    );

}

export default GamesList;
