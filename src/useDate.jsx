import { useState, useEffect } from "react";
import {allOption, weekArray} from './utils/DateArray'

function useDate () {

    const [inputDate, setInputDate] = useState({
        year: '',
        month: '',
        date: '',
        hour: '',
        minute: '',
        second: ''
    })

    const [currentDate, setCurrentDate] = useState({
        timestamp: '',
        currDate: ''
    })

    const [dateType, setDateType] = useState('')

    const handleType = (e) => {
        setDateType(prevState => e.value)
    }

    const handleDate = (e) => {
        setInputDate(prevState => {
            return {
                ...prevState,
                [e.name]: parseInt(e.value)
            }
        })
    }

    const getDate = (inputDate, dateType) => {
        const {year, month, date, hour, minute, second} = inputDate
        const currDate = new Date(year, month - 1, date, hour, minute, second)
        let formatDate;

        if (dateType === ':t') {
            formatDate = `${hour/12 == 1? hour: hour%12}:${minute > 9? minute : `0${minute}`} ${hour/12 >= 1? 'PM': 'AM'}`
        } else if (dateType === ':T') {
            formatDate = `${hour/12 == 1? hour: hour%12}:${minute > 9? minute : `0${minute}`}:${second > 9? second : `0${second}`} ${hour/12 >= 1? 'PM': 'AM'}`
        } else if (dateType === ':d') {
            formatDate = `${month}/${date}/${year}`
        } else if (dateType === ':D') {
            formatDate = `${allOption[month-1]} ${date}, ${year}`
        } else if (dateType === ':F') {
            formatDate = `${weekArray[currDate.getDay()]}, ${allOption[month-1]} ${date}, ${year} ${hour/12 == 1? hour: hour%12}:${minute > 9? minute : `0${minute}`} ${hour/12 >= 1? 'PM': 'AM'}`
        } 
        /*else if (dateType === ':R') {
            formatDate = timeDiffCalc(currDate, new Date());
        }*/
        return formatDate
    }
    /*
    function timeDiffCalc(dateFuture, dateNow) {
        let formatString;
        let diffInMilliSeconds = (dateFuture - dateNow) / 1000;
    
        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400);
        console.log(diffInMilliSeconds)
        if (days > 0) {
            formatString = `In ${days} days`
            return formatString
        } else if (days < 0) {
            formatString = `${Math.abs(days)} days ago`
            return formatString
        }
        
    
        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        console.log('calculated hours', hours);
    
        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;
        console.log('minutes', minutes);
    
        let difference = '';
        if (days > 0) {
          difference += (days === 1) ? `${days} day, ` : `${days} days, `;
        }
    
        difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
    
        difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 
    }
    */
    useEffect(() => {
        const dateNow = new Date(Date.now())

        const newInputDate = {
            year: dateNow.getFullYear(),
            month: dateNow.getMonth()+1,
            date: dateNow.getDate(),
            hour: 0,
            minute: 0,
            second: 0
        }

        setInputDate(prevState => newInputDate)
    }, [])

    useEffect(() => {
        const {year, month, date, hour, minute, second} = inputDate
        const newDate = new Date(year, month - 1, date, hour, minute, second)
        const timestamp = Date.parse(newDate)/1000

        const currDate = getDate(inputDate, dateType)
        console.log(currDate)

        setCurrentDate(prevState => {
            return {
                timestamp: timestamp,
                currDate: currDate
            }
        })

    }, [inputDate,dateType])


    return {inputDate, currentDate, dateType, handleDate, handleType}
}



export default useDate