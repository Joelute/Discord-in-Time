import { useState, useEffect } from "react";
import {allOption, weekArray} from './DateArray'

function useIntro () {

    const [intro, setIntro] = useState({
        isIntro: false,
        section: ''
    })

    const handleIntro = () => {
        
        setIntro(prevState => {
            return ({
                isIntro: !prevState.isIntro,
                section: 1
            })
        })
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

    return {intro, handleIntro, nextSection}
}



export default useIntro