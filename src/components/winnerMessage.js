import React from 'react';

const WinnerMessage = props => {
  return (
    props.message && (
      <div className="winner-message">
        <span className="player-name">{props.message}</span>
        <span className="player-wins">Wins!</span>
      </div>
    )
  );
};

export default WinnerMessage;
