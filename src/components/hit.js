import React from 'react';

const Hit = props => (props.player1 && props.player2) ? (props.player1.hit > 2 || props.player2.hit > 2 ? <div className="hit">Bollazon<span>!</span><span>!</span></div> : null) : null

export default Hit;