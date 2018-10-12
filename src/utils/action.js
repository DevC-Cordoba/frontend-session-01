export const ACTION_TYPES = {ATTACK: 'attack', DEFENSE: 'defense'};

export const ACTIONS = [
  {
    value: 10,
    onDefenseValue: 2,
    name: 'punch',
    type: ACTION_TYPES.ATTACK
  },
  {
    value: 20,
    onDefenseValue: 4,
    name: 'kick',
    type: ACTION_TYPES.ATTACK
  },
  {
    value: 0,
    onDefenseValue: 0,
    name: 'shield',
    type: ACTION_TYPES.DEFENSE
  }
];
