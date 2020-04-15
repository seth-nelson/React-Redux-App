import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import BreweryCard from './BreweryCard';


const BreweryList = props => {
    console.log(props);
    return (
        <div className='main-container'>
            {props.isLoading ? (
                <h4>Finding beer...</h4>
            ) : (
                <div>
                    <button onClick={() => props.getData()}>Find Refreshments</button>
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

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(BreweryList);