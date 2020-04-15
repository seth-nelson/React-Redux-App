import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';


const BreweryList = props => {
    return (
        <div className='main-container'>
            {props.isLoading ? (
                <h4>Finding beer...</h4>
            ) : (
                <div>
                    <button onClick={() => props.fetchData()}>Find Refreshments</button>
                    {props.error && (
                        <div className='error-message'>Error finding refreshments</div>
                    )}
                    <div className='brewery-list-container'>
                        <BreweryCard name={props.breweryName} type={props.breweryType} city={props.breweryCity} state={props.breweryState} phone={props.breweryPhone}/>
                    </div>
                </div>
            )
            })
        </div>
    )
}


export default BreweryList;