import styled from "styled-components";

export const Container = styled.div`
    background-image: ${props => props.theme.gradient};
    width: 60%;
    padding: 1.2em 2em;
    border-radius: 10px;
    height: 12em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.2em;
`

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`