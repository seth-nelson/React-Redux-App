import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const getData = (stateName = 'washington') => {
    return dispatch => {
        dispatch({
            type: GET_DATA
        });
        // setTimeout(() => {
            axios
                .get(`https://api.openbrewerydb.org/breweries?by_state=${stateName}`)
                .then(result => {
                    console.log('data pull from API', result);
                    const breweries = result.data.map(place => {
                        return {
                            breweryId: place.id,
                            breweryName: place.name,
                            breweryType: place.brewery_type,
                            breweryStreet: place.street,
                            breweryCity: place.city,
                            breweryState: place.state,
                            breweryZip: place.postal_code,
                            breweryPhone: place.phone
                        };
                    });
                    dispatch ({ type: DATA_SUCCESS, payload: breweries });
                    console.log('data pull successful', breweries);
                })
                .catch(error => {
                    console.log('data error', error);
                    dispatch({ type: DATA_ERROR, payload: error});
                });
        // }, 1000);
    };
};