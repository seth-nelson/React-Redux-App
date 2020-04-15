import React from 'react';


const BreweryCard = props => {
        return (
            <div className='brewery-card-container'>
                <div className='name-and-type'>
                    <h2>{props.name}</h2>
                    <h4>{props.type}</h4>
                </div>
                <div className='location-info'>
                    <p>{props.street}</p>
                    <p>{props.city}, {props.state} {props.zip}</p>
                    <p>P:  {props.phone}</p>
                </div>
                
            </div>
        )
}


export default BreweryCard;