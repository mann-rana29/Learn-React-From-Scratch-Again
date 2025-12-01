import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="outer">
                <div className="up">
                        <img src={props.image} alt="player" />
                </div>
                <div className="down">
                    <div className="name"></div>
                    <h2>{props.name}</h2>
                    <div className="ability">
                        <div className="left">
                            <h4><span>{props.pace}</span> PAC</h4>
                            <h4><span>{props.shot}</span> SHO</h4>
                            <h4><span>{props.pass}</span> PAS</h4>
                        </div>
                        <div className="right">
                            <h4><span>{props.dribble}</span> DRI</h4>
                            <h4><span>{props.defence}</span> DEF</h4>
                            <h4><span>{props.physical}</span> PHY</h4>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Card
