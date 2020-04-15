import React from 'react';


const BreweryCard = props => {
    // {props.breweries.map(place => {
        return (
            <div className='brewery-card-container'>
                <div className='name-and-type'>
                    <h2>{props.name}</h2>
                    <h4>{props.type}</h4>
                </div>
                <div className='location-info'>
                    <h5>{props.city}</h5>
                    <h5>{props.state}</h5>
                    <h5>{props.phone}</h5>
                </div>
                
            </div>
        )
    // })}
}


export default BreweryCard;