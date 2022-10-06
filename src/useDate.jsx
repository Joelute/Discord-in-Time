import { useState, useEffect } from "react";

function useDate () {

    const [inputDate, setInputDate] = useState({
        year: '',
        month: '',
        date: ''
    })

    const [currentDate, setCurrentDate] = useState({
        timestamp: ''
    })  

    const handleDate = (e) => {
        setInputDate(prevState => {
            const target = e.target
            return {
                ...prevState,
                [target.name]: parseInt(target.value)
            }
        })
    }

    useEffect(() => {
        const dateNow = new Date(Date.now())

        const newInputDate = {
            year: dateNow.getFullYear(),
            month: dateNow.getMonth()+1,
            date: dateNow.getDate()
        }

        setInputDate(prevState => newInputDate)
    }, [])

    useEffect(() => {
        const newDate = new Date(inputDate.year, inputDate.month - 1, inputDate.date)
        const timestamp = Date.parse(newDate)/1000

        setCurrentDate(prevState => {
            return {
                timestamp: timestamp
            }
        })
    }, [inputDate])

    return {inputDate, currentDate, handleDate}
}



export default useDate