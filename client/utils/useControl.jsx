import { useState, useEffect } from "react";
import {allOption, weekArray} from './DateArray'

function useIntro () {

    const [intro, setIntro] = useState({
        isIntro: false,
        section: ''
    })

    const [createNewDate, setCreateNewDate] = useState(false)

    const handleIntro = () => {

        setCreateNewDate(prevState => false)
        
        setIntro(prevState => {
            return ({
                isIntro: !prevState.isIntro,
                section: 1
            })
        })
    }

    const handleCreateNewDate = () => {
        setCreateNewDate(prevState => !prevState)
    }

    const nextSection = () => {
        if (!intro.isIntro) {
            return
        }
        if (intro.section >= 5) {
            setIntro(prevState => {
                return ({
                    isIntro: !prevState.isIntro,
                    section: ''
                })
            })
        }
        else {
            setIntro(prevState => {
                return ({
                    ...prevState,
                    section: prevState.section + 1
                })
            })
        }
    }

    return {intro, handleIntro, nextSection , handleCreateNewDate, createNewDate}
}



export default useIntro