import React from 'react';
import {ACTIONS} from '../utils/action';
import Joystick from '../images/joystick.png';
import btnPunch from '../images/btn-punch.png';
import btnKick from '../images/btn-kick.png';
import btnShield from '../images/btn-shield.png';

const BTNIMAGES = {
  punch: btnPunch,
  kick: btnKick,
  shield: btnShield
};

const Control = props => {
  return props.player ? (
    <div className="joystick" style={{backgroundImage: `url(${Joystick})`}}>
      {ACTIONS.map(action => (
        <div
          className="joystick-button"
          onClick={() => props.onButtonClick(action)}
          key={action.name}
          style={{backgroundImage: `url(${BTNIMAGES[action.name]})`}}>
          {action.name}
        </div>
      ))}
    </div>
  ) : null;
};

export default Control;
