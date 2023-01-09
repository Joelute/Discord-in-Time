import styled from "styled-components"

export default function DateDetail({id, name, description, timestamp, handleCurrentDate}) {
    return (
        <>  

            <StyledContainer>
                <StyledBack onClick={() => handleCurrentDate(id)}>

                </StyledBack>
                <StyledCard>
                    <StyledName>
                        {name}
                    </StyledName>
                    <StyledDescription>
                        {description}
                    </StyledDescription>
                    <StyledTimestamp>
                        {timestamp}
                    </StyledTimestamp>
                </StyledCard>
            </StyledContainer>
            
        </>
        
    )
}

const StyledContainer = styled.div`
    position: fixed;
    width: calc(100% - 365px);
    height: 100%;
    display:flex;

    @media (max-width: 950px) {
        width: 100%
    }
`

const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    background-color: #33363A;
    
    border-radius: 10px;
    margin: auto auto;
    z-index: 3;
    padding: 1em;
    /* for IE */
    box-shadow: 0 0 0 1000px rgba(0,0,0,.5);
    /* for real browsers */
    box-shadow: 0 0 0 200vmax rgba(0,0,0,.7);
    border-radius: 10px;
    transition: box-shadow 1s ease;
`

const StyledBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
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