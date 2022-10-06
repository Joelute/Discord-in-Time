import useDate from "../useDate"
import {StyledSelect} from "./StyledDropdown";

export default function DateDropdown({inputDate, handleDate}) {

    const getAllOption = () => {
        const totalDays = new Date(inputDate.year, inputDate.month, 0).getDate()
        const allOption = new Array(totalDays).fill('')
        return allOption
    }

    const allOptionElement = getAllOption().map((currentDay, index) => {
        return(
            <option value={index+1}>{index+1}</option>
        )
    })

    return(
        <StyledSelect name = 'date' value={inputDate.date} onChange={e => handleDate(e)}>
            {allOptionElement}
        </StyledSelect>
    )
}