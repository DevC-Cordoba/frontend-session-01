import React, {Component} from 'react';
import '../styles/player.css';
import PropTypes from 'prop-types';
import Foot from '../images/foot.png';
import Arm from '../images/arm.png';
import Shield from '../images/shield.png';

class Player extends Component {
  render() {
    let {name, thumbnail, player, action = '', winner, delay = 0} = this.props.hero;
    if (name)
      return (
        <React.Fragment>
          <div className={'player ' + player + ' ' + action + ' ' + (winner ? 'winner' : '')}>
            <span className="name">{name}</span>
            <svg
              className="shine"
              width="48"
              height="103"
              viewBox="0 0 48 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M48 18.5C48 25.4036 37.2548 21 24 21C10.7452 21 0 25.4036 0 18.5C0 11.5964 10.7452 6 24 6C37.2548 6 48 11.5964 48 18.5Z"
                fill="url(#paint0_linear)"
              />
              <g filter="url(#filter0_f)">
                <ellipse rx="8" ry="4" transform="matrix(1 0 0 -1 24 95)" fill="white" />
              </g>
              <ellipse rx="4" ry="2" transform="matrix(1 0 0 -1 24 95)" fill="white" />
              <g filter="url(#filter1_f)">
                <ellipse rx="10" ry="5" transform="matrix(1 0 0 -1 24 11)" fill="white" />
              </g>
              <ellipse rx="5" ry="2.5" transform="matrix(1 0 0 -1 24 11)" fill="white" />
              <defs>
                <filter
                  id="filter0_f"
                  x="12"
                  y="87"
                  width="24"
                  height="16"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                </filter>
                <filter
                  id="filter1_f"
                  x="8"
                  y="0"
                  width="32"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                </filter>
                <linearGradient id="paint0_linear" x1="24" y1="6" x2="24" y2="31" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.8" />
                  <stop offset="0.309392" stopColor="white" stopOpacity="0.4" />
                  <stop offset="1" stopColor="white" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
            <img src={thumbnail.path + '/standard_fantastic.' + thumbnail.extension} alt="Hero" />
          </div>
          <div className={'player actions ' + player + ' ' + action + ' ' + (winner ? 'winner' : '')}>
            <img src={Arm} alt="Arm" className="arm" style={{animationDelay: delay + 's'}} />
            <img src={Foot} alt="Foot" className="foot" style={{animationDelay: delay + 's'}} />
            <img src={Shield} alt="shield" className="shield-action" style={{animationDelay: delay + 's'}} />
          </div>
        </React.Fragment>
      );
    return null;
  }
}

Player.propTypes = {
  hero: PropTypes.object
};

Player.defaultProps = {
  hero: {}
};

export default Player;
