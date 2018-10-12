import React from 'react'
import PropTypes from 'prop-types';

const LifeBar = (props) => {
    let { hero } = props
    return <div className={"life-bar-containter " + hero.player}>
        <div className="life-bar" style={{transform: "translateY(" + Math.abs(hero.life - 100) + "%)"}}></div>
        <div className="life-bar-red" style={{transform: "translateY(" + Math.abs(hero.life - 100) + "%)"}}></div>
    </div>
}

LifeBar.propTypes = {
    hero: PropTypes.object
}

LifeBar.defaultProps = {
    hero:{}
}

export default LifeBar