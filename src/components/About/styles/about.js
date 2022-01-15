import styled from 'styled-components';


export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 800px;
    margin: 3em auto;
    line-height: 1.5;
    grid-gap: 4em;

`;

export const Title = styled.h2`
    grid-column: 1/3;
    text-align: center;
    font-size: 40px;
    margin: 0;
    margin-bottom: 1em;
    color: white;
    & span{
        color: ${props=>props.theme.colors.primary};
    }
`;

export const Image = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;

`;

export const Text = styled.p`
    color: white;
    font-size: 20px;
`;