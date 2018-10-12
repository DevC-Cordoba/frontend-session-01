import React, {Component} from 'react';
import '../styles/gameContainer.css';
import '../styles/game.css';
import HeroService from '../services/heroService';
import Player from '../components/player';
import LifeBar from '../components/lifeBar';
import Control from '../components/control';
import Logo from '../components/logo';
import Loading from '../components/loader';
import {ACTION_TYPES, ACTIONS} from '../utils/action';
import {heroes} from '../utils/heroes';
import WinnerMessage from '../components/winnerMessage';
import Hit from '../components/hit';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'loading',
      winner: null
    };
    this.timeOut = null;
  }

  componentWillMount() {
    this.getHeroes();
  }

  render() {
    return (
      <div className={'game-container ' + this.state.gameStatus + ' ' + (this.state.winner && 'gameover')}>
        <Logo />
        <Loading />
        <Player hero={this.state.player1} />
        <Player hero={this.state.player2} />
        <LifeBar hero={this.state.player1} />
        <LifeBar hero={this.state.player2} />
        <Control onButtonClick={this.setSecuence} player={this.state.player1} />
        <Hit player1={this.state.player1} player2={this.state.player2} />
        <WinnerMessage message={this.state.winner} />
      </div>
    );
  }

  setSecuence = actionPlayer1 => {
    let _player1 = {...this.state.player1};
    let _player2 = {...this.state.player2};

    let actionPlayer2 = this.getRandomItem(ACTIONS);

    if (actionPlayer1.type === ACTION_TYPES.ATTACK && actionPlayer2.type === ACTION_TYPES.ATTACK) {
      _player1.life = _player1.life - actionPlayer2.value;
      _player2.life = _player2.life - actionPlayer1.value;

      _player1.delay = (Math.random() * (0.12 - 0.02) + 0.02).toFixed(4);
      _player2.delay = (Math.random() * (0.12 - 0.02) + 0.02).toFixed(4);

      if (_player1.hit == 3) {
        _player1.hit = 0;
      } else {
        _player1.hit++;
      }

      if (_player2.hit == 3) {
        _player2.hit = 0;
      } else {
        _player2.hit++;
      }
    } else if (actionPlayer1.type === ACTION_TYPES.ATTACK && actionPlayer2.type === ACTION_TYPES.DEFENSE) {
      _player1.life = _player1.life - actionPlayer1.onDefenseValue;
      _player2.life = _player2.life - actionPlayer1.value / 2;

      _player1.delay = 0;
      _player2.delay = 0;

      _player1.hit = 0;
      _player2.hit = 0;
    } else if (actionPlayer2.type === ACTION_TYPES.ATTACK && actionPlayer1.type === ACTION_TYPES.DEFENSE) {
      _player1.life = _player1.life - actionPlayer2.value / 2;
      _player2.life = _player2.life - actionPlayer2.onDefenseValue;

      _player1.delay = 0;
      _player2.delay = 0;

      _player1.hit = 0;
      _player2.hit = 0;
    }

    if (_player2.life < 1) {
      _player1.winner = true;

      this.setState({
        winner: _player1.name,
        player1: _player1
      });
    } else if (_player1.life < 1) {
      _player2.winner = true;

      this.setState({
        winner: _player2.name,
        player2: _player2
      });
    }
    this.setState({player2: _player2, player1: _player1}, () => {
      this.hitThatGuy(actionPlayer1.name, actionPlayer2.name);
    });
  };

  getHeroes = () => {
    let hero1 = this.getRandomHero();
    let hero2 = this.getRandomHero();

    Promise.all([hero1, hero2])
      .then(values => {
        this.setState({
          gameStatus: 'ready',
          player1: Object.assign(values[0], {life: 100, player: 'player1', hit: 0}),
          player2: Object.assign(values[1], {life: 100, player: 'player2', hit: 0})
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getRandomHero = () => {
    let id = this.getRandomItem(heroes);
    return HeroService.getHeroById(id)
      .then(resp => {
        return resp.data.data.results[0];
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getRandomItem = list => {
    return list[Math.floor(Math.random() * list.length)];
  };

  hitThatGuy = (action1, action2) => {
    clearTimeout(this.timeOut);
    let _player1 = {...this.state.player1};
    _player1.action = action1;
    let _player2 = {...this.state.player2};
    _player2.action = action2;

    this.setState({player1: _player1, player2: _player2});
    this.timeOut = setTimeout(() => {
      let _player1Updated = {...this.state.player1};
      _player1Updated.action = '';
      let _player2Updated = {...this.state.player2};
      _player2Updated.action = '';
      this.setState({player1: _player1Updated, player2: _player2Updated});
    }, 1000);
  };
}

export default GamePage;
