import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"

export default function DateDetail({id, name, description, timestamp, handleCurrentDate, updateDateOnChange, updateDateOnDelete}) {

    const [editDate, setEditDate] = useState({
        isEditing: false,
        name: `${name}`,
        description: `${description}`,
        timestamp: `${timestamp}`
    })

    

    const handleEditDate = (e) => {
        setEditDate(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const startEdit = () => {
        setEditDate(prevState => {
            return {
                ...prevState,
                isEditing: true
            }
        })
    }

    const cancelEdit = (fullCancel) => {
        setEditDate(prevState => {
            if (fullCancel) {
                return {
                    isEditing: false,
                    name: `${name}`,
                    description: `${description}`,
                    timestamp: `${timestamp}`
                }
            } else {
                return {
                    isEditing: false,
                }
            }
            
        })
    }

    const saveEdit = async() => {
        const body = JSON.stringify({
            name: editDate.name,
            description: editDate.description,
            timestamp: editDate.timestamp
        })

        const res = await fetch(`https://discordintime.up.railway.app/api/v1/date/${id}`, {
            method: 'PATCH',
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
        console.log('Date updated')
    }

    const deleteDate = async() => {
        const res = await fetch(`https://discordintime.up.railway.app/api/v1/date/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!res.ok) { 
            console.log('Something went wrong. Try again later.') 
            return('Something went wrong. Try again later.')
        } else if (res) {
            console.log('Date Deleted')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        saveEdit()
        updateDateOnChange({
            id: id,
            name: editDate.name,
            description: editDate.description,
            timestamp: editDate.timestamp
        })
        cancelEdit()
    }

    const handleDelete = () => {
        deleteDate()
        updateDateOnDelete(id)
        handleCurrentDate()
    }
    
    useEffect(() => {
        setEditDate(prevState => {
            return {
                ...prevState,
                name: `${name}`,
                description: `${description}`,
                timestamp: `${timestamp}`
            }
        })
    }, [timestamp])

    //Textarea autosizer
    function OnInput() {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    }

    useEffect(()=> {
        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;");
            tx[i].addEventListener("input", OnInput, false);
        }
    }, [editDate])

    return (
        <>  
            <StyledContainer>
                <StyledBack onClick={() => handleCurrentDate(id)}>

                </StyledBack>
                <StyledCard>
                    <StyledDateDetail onSubmit={(e) => handleSubmit(e)}>
                        <StyledName 
                            type='text' 
                            name='name'
                            value={editDate.name} 
                            onChange={(e) => handleEditDate(e)} 
                            onClick={startEdit}>
                        </StyledName>
                        <StyledDescription 
                            name='description' 
                            value={editDate.description} 
                            onChange={(e) => handleEditDate(e)} 
                            onClick={startEdit}
                        ></StyledDescription>
                    </StyledDateDetail>
                    <BottomContainer>
                        <StyledTimestamp>
                            {timestamp}
                        </StyledTimestamp>
                        <div>
                            {editDate.isEditing && <StyledButton backgroundColor='#33AB2C' onClick={handleSubmit}>Save</StyledButton>}
                            {editDate.isEditing && <StyledButton onClick={() => cancelEdit(true)}>Cancel</StyledButton>}
                            {!editDate.isEditing && <StyledButton backgroundColor='#B68E15'onClick={startEdit}>Edit</StyledButton>}
                            {!editDate.isEditing && <StyledButton backgroundColor='#D12828'onClick={handleDelete}>Delete</StyledButton>}
                            {!editDate.isEditing && <StyledButton onClick={handleCurrentDate}>Close</StyledButton>}
                        </div>
                    </BottomContainer>
                    
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
        width: calc(100% - 4em);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`

const StyledName = styled.input`
    color: #EBEBEB;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: inherit;
    border: none;
    border-radius: 10px;
    padding: .5em .7em;
    width: 100%;

    :focus {
        background-color: #1C1E21;
    }
`

const StyledDescription = styled.textarea`
    color: #A0A0A0;
    background-color: inherit;
    border: none;
    border-radius: 10px;
    padding: .5em .7em;
    width: 100%;
    resize: none;
    font-size: 1.1rem;
    max-height: 18em;
    overflow-y: hidden;

    :focus {
        background-color: #1C1E21;
        overflow-y: scroll;
    }
`

const StyledTimestamp = styled.p`
    color: #EBEBEB;
    padding: .5em;
    background-color: #393D41;
    border-radius: 10px;
    width: fit-content;
    outline: none;
    border: none;
    font-size: 1.3rem;
`

const StyledDateDetail = styled.form`

`

const BottomContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const StyledButton = styled.button`
    padding: 0.5em 1em;
    font-size: 1.1rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: ${props => props.backgroundColor || '#393D41'};
    color: #EBEBEB;
    margin: 0 0 0 .5em;
    cursor: pointer;

    :hover {
        background-color: ${props => props.backgroundColor || '#4C5257'};
        filter: brightness(80%);
    }
`