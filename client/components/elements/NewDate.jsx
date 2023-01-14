import { useState } from 'react'
import styled from 'styled-components'
export default function NewDate ({timestamp, handleCreateNewDate}) {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        timestamp: `${timestamp}`
    })

    const handleFormData = (e) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const CreateNewDate = async() => {
        const body = JSON.stringify(formData)
        const res = await fetch('https://discordintime.up.railway.app/api/v1/date/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
        if (!res.ok) { 
            console.log('Something went wrong. Try again later.') 
            return('Something went wrong. Try again later.')
        }
        
        const data = await res.json()
        console.log('Date created')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        CreateNewDate()
        handleCreateNewDate()
    }

    return (
        <>
            <StyledBack onClick={handleCreateNewDate}>

            </StyledBack>
            <StyledContainer onSubmit={(e) => handleSubmit(e)}>
                <StyledLabel>Name</StyledLabel>
                <StyledInput type='text' name='name' value={formData.name} onChange={(e) => handleFormData(e)} required></StyledInput>
                <StyledLabel>Description</StyledLabel>
                <StyledTextarea name='description' value={formData.description} onChange={(e) => handleFormData(e)}></StyledTextarea>
                <BottomContainer>
                    <StyledTimestamp>{timestamp}</StyledTimestamp>
                    <StyledButton type='submit'>Create timestamp</StyledButton>
                </BottomContainer>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.form`
    position: fixed;
    background-color: #33363A;
    border-radius: 10px;
    padding: 1em;
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 30em;
    box-shadow: 0 0 0 1000px rgba(0,0,0,.5);
    box-shadow: 0 0 0 200vmax rgba(0,0,0,.7);

    @media(max-width: 600px) {
        top: 15em;
        
    }
`

const BottomContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const StyledBack = styled.div`
    width: calc(100% - 300px);
    height: calc(100% - 4.4em);
    position: fixed;
    top:4.4em;
    left: 18.8em;
    margin: 0;

    @media (max-width: 950px) {
        width:100%;
        left: 0;
    }
`

const StyledLabel = styled.h3`
    font-size: 1rem;
    color: #B3B5BD;
    letter-spacing: 2px;
    padding:0.2em 0.5em;
`

const StyledTextarea = styled.textarea`
    resize: none;
    height: 10em;
    background-color: #202326;
    margin-bottom: 1em;
    border-radius: 10px;
    padding: .5em .7em;
    color: #EBEBEB;
    border: none;
    outline: none;
    font-size: 1.3rem;  
`

const StyledInput = styled.input`
    background-color: #202326;
    margin: 2px 0;
    border-radius: 10px;
    padding: .5em .7em;
    color: #EBEBEB;
    border: none;
    outline: none;
    font-size: 1.3rem;
`

const StyledTimestamp = styled.div`
    color: #EBEBEB;
    padding: .5em;
    background-color: #393D41;
    border-radius: 10px;
    width: fit-content;
    outline: none;
    border: none;
    font-size: 1.3rem;
`

const StyledButton = styled.button`
    color: #EBEBEB;
    padding: .5em;
    background-color: #393D41;
    border-radius: 10px;
    width: fit-content;
    font-size: 1.3rem;
    border: none;
    animation: color 1s ease;

    :hover {
        background-color: #4C5257;
    }
`