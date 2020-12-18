import { GET_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions/index';

export const initialState = {
    breweries: [],
    isLoading: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                isLoading: true
            };
        
        case DATA_SUCCESS:
            return {
                ...state,
                breweries: action.payload,
                isLoading: false,
            };

        case DATA_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
            
        default:
            return state;
    }
};