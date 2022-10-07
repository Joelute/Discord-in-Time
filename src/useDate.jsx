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
        } else if (dateType === ':R') {
            formatDate = timeDiffCalc(currDate, new Date());
        } else if (!dateType) {
            formatDate = `${allOption[month-1]} ${date}, ${year} ${hour/12 == 1? hour: hour%12}:${minute > 9? minute : `0${minute}`} ${hour/12 >= 1? 'PM': 'AM'}`
        }
        return formatDate
    }
    
    function timeDiffCalc(dateFuture, dateNow) {
        let formatString;
        let diffInMilliSeconds = (dateFuture - dateNow) / 1000;
        const isNegative = Math.sign(diffInMilliSeconds) > 0 ? 1 : -1;
        diffInMilliSeconds = Math.abs(diffInMilliSeconds)
        
        
        //calculate years
        const years = Math.floor(diffInMilliSeconds / 31536000)*isNegative;

        if (years > 1) {
            formatString = `In ${years} years`
            return formatString
        } else if (years < -1) {
            formatString = `${Math.abs(years)} years ago`
            return formatString
        } else if (years == 1) {
            formatString = `In a year`
            return formatString
        } else if (years == -1) {
            formatString = `A year ago`
            return formatString
        }


        //calculate months
        const months = Math.floor(diffInMilliSeconds / 2419200)*isNegative;

        if (months > 1) {
            formatString = `In ${months} months`
            return formatString
        } else if (months < -1) {
            formatString = `${Math.abs(months)} months ago`
            return formatString
        } else if (months == 1) {
            formatString = `In a month`
            return formatString
        } else if (months == -1) {
            formatString = `A month ago`
            return formatString
        }
        

        // calculate days
        const days = Math.floor(diffInMilliSeconds / 86400)*isNegative;

        if (days > 1) {
            formatString = `In ${days} days`
            return formatString
        } else if (days < -1) {
            formatString = `${Math.abs(days)} days ago`
            return formatString
        } else if (days == 1) {
            formatString = `In a day`
            return formatString
        } else if (days == -1) {
            formatString = `A day ago`
            return formatString
        }


        // calculate hours
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24 * isNegative;

        if (hours > 1) {
            formatString = `In ${hours} hours`
            return formatString
        } else if (hours < -1) {
            formatString = `${Math.abs(hours)} hours ago`
            return formatString
        } else if (hours == 1) {
            formatString = `In a hour`
            return formatString
        } else if (hours == -1) {
            formatString = `A hour ago`
            return formatString
        }
        
    
        // calculate minutes
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60 * isNegative;

        if (minutes > 1) {
            formatString = `In ${minutes} minutes`
            return formatString
        } else if (minutes < -1) {
            formatString = `${Math.abs(minutes)} minutes ago`
            return formatString
        } else if (minutes == 1) {
            formatString = `In a minute`
            return formatString
        } else if (minutes == -1) {
            formatString = `A minute ago`
            return formatString
        }

        let second = Math.floor(diffInMilliSeconds -= minutes * 60)* isNegative;
        
        if (second >= 0) {
            formatString = `In ${second} seconds`
            return formatString
        } else if (second < 0) {
            formatString = `${Math.abs(second)} seconds ago`
            return formatString
        }
    }
    
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