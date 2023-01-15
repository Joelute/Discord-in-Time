import styled from "styled-components"

export default function DateCard({id, name, description, timestamp, handleCurrentDate}) {
    
    return(
        <StyledCard onClick={() => handleCurrentDate(id)}>
            <StyledName>{name}</StyledName>
            <StyledDescription>{description}</StyledDescription>
            <StyledTimestamp>{timestamp}</StyledTimestamp>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    border-radius: 10px;
    background-color: #26282B;
    max-width: 300px;
    padding: 1em;
    min-height:200px;
    max-height:300px;

    :hover {
        box-shadow: 0 5px 15px rgba(0,0,0, 0.4);
        background-color: #1C1E21;
    }
    
`

const StyledName = styled.h2`
    color: #EBEBEB;
    font-size: 1.1rem;
    font-weight: 700;
`

const StyledDescription = styled.p`
    color: #A0A0A0;
`

const StyledTimestamp = styled.p`
    color: #EBEBEB;
    padding: .5em;
    background-color: #393D41;
    border-radius: 10px;
    width: fit-content;
`

