import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import BreweryCard from './BreweryCard';

import { FindBreweriesBtn, BreweryListContainer, } from './Styles';


const BreweryList = props => {
    console.log('breweryList props', props);
    return (
        <div className='main-container'>
            {props.isLoading ? (
                <h4>Finding beer...</h4>
            ) : (
                <div>
                    <FindBreweriesBtn onClick={() => props.getData()}>Find Refreshments</FindBreweriesBtn>
                    {props.error && (
                        <div className='error-message'>Error finding refreshments</div>
                    )}
                    <div>
                        {props.breweries.map(places => {
                            return (
                                <BreweryListContainer className='brewery-list-container'>
                                    <BreweryCard key={places.breweryId} name={places.breweryName} type={places.breweryType} street={places.breweryStreet} city={places.breweryCity} state={places.breweryState} zip={places.breweryZip} phone={places.breweryPhone}/>
                                </BreweryListContainer>
                            );
                        })}
                    </div>
                </div>
            )
            }
        </div>
    );
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