import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import DateCard from "../components/elements/DateCard"
import DateDetail from "../components/elements/DateDetail"
import Layout from "../components/layouts/layout"

export default function Timestamps() {

    const [date, setDate] = useState([])

    const [currentDate, setCurrentDate] = useState({
        show: false,
        id: '',
        name: '',
        description: '',
        timestamp: '',
    })
    
    const handleCurrentDate = (id) => {
        currentDate.show?
        setCurrentDate(prevState => {
            return {
                show: false
            }
        }):
        setCurrentDate(prevState => {
            return {
                show: true,
                id: id
            }
        })
    }

    const DateElement = date.map(item => {
        return (
            <DateCard key={item._id} name={item.name} description={item.description} timestamp={item.timestamp} id={item._id} handleCurrentDate={handleCurrentDate}> </DateCard>
        )
    })

    useEffect(() => {
        const fetchDate = async() => {
            const res = await fetch('https://discordintime.up.railway.app/api/v1/date/')
            const data = await res.json()
            setDate(prevState => data.data)
        }
        
        fetchDate()
    }, [])

    useEffect(() => {
        const fetchDate = async() => {
            const res = await fetch(`https://discordintime.up.railway.app/api/v1/date/${currentDate.id}`)
            const data = await res.json()
            setCurrentDate(prevState => {
                return {
                    ...data.data,
                    ...prevState
                }
            })
        }
        if (currentDate.id){
            fetchDate()
        }
    }, [currentDate.id])

    return (
        <Layout intro={false} handleIntro={() => {}}>
            
            <StyledContainer>
                {currentDate.show && <DateDetail 
                    id={currentDate.id} 
                    name={currentDate.name} 
                    description={currentDate.description} 
                    timestamp={currentDate.timestamp} 
                    handleCurrentDate={handleCurrentDate}>
                </DateDetail>}
                {DateElement}
            </StyledContainer>
        </Layout>
    )
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
    padding: 2em;
    justify-content: center;
`