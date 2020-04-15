import styled, { css } from 'styled-components';


//Color Profiles -----------------------------------------

/* App colors: OPTION 1 */
/* top container bg: #6E2B12 __
top color text: #F26A37 __
top color text border: #EAE741 __
top color icons: white

bottom (global) container bg: #1E0E0C __
bottom card container bg: #D52027 __
bottom container edge border: #EAE741

accent color: #EAE741 */



/* App colors: OPTION 2 */
/* top container bg: #10635c
top color text: #c8c7c1
top color text border: #E5E500
top color icons: white

bottom container bg: #173b2b
bottom card container bg: #73203C
bottom-text-color: #232420
bottom container edge border: #0f524b

accent color: ##6D243A or #E5E500 */



//Global Styles ----------------------


export const MainBody = styled.div`
    /* width: 300px; */
    background-color: #1E0E0C;
`;


//Header Styles ----------------------


export const Header = styled.header`
    align-content: center;
    background-color: #6E2B12;
    border: 2px solid #EAE741;
    border-radius: 7.5px;
    box-shadow: 5px 10px #1E0E0C;
    color: #F26A37;
`;


//Body Styles ------------------------


export const BreweryListContainer = styled.div`
    align-content: center;
    width: 250px;
`;

export const BreweryCardContainer = styled.div`
    background-color: #D52027;
    border: 2px solid #EAE741,
    border-radius: 5px;
    box-shadow: 2.5px 5px #1E0E0C;
    color: #1E0E0C;
`;

export const CardLeft = styled.div`
    align-content: left;
`;

export const CardRight = styled.div`
    align-content: center;
`;