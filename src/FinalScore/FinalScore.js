import React from 'react';
import { useLocation } from 'react-router-dom';
import './FinalScore.css';

const FinalScore = () => {

    const location = useLocation();
    const {scores} = location.state || {};
    const game_key = {words: "Find the Navigational Coordinates (words)",
                    numbers: "Decipher the Secret Code (numbers)",
                    reversedNumbers: "Unscramble the Code to the Vault (reversed numbers)",
                    categories: "Discover the Code to the Portal (categories)"};
    const renderScores = (gameScores) => {
        console.log("hey");
        return Object.entries(gameScores || {}).map(([key, value]) => (
          <div key={key} className="score-item">
            <span className="score-key">{key}:</span> <span className="score-value">{value}</span>
          </div>
        ));
      };

      return (
        <div className="final-score-container">
          <h1 className="title">Final Scores</h1>
          <div>{console.log(scores)}</div>
          <div className="scores-grid">
            {Object.entries(scores || {}).map(([game, gameScores]) => (
              <div key={game_key[game]} className="game-score">
                <h2 className="game-title">{game_key[game]}</h2>
                {renderScores(gameScores)}
              </div>
            ))}
          </div>
        </div>
      );
};

export default FinalScore;

