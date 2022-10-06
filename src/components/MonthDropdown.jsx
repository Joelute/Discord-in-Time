import useDate from "../useDate"
import {StyledSelect} from "./StyledDropdown";

export default function MonthDropdown({inputDate, handleDate}) {


    const allOption = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const allOptionElement = allOption.map((currentMonth, index) => {
        return (
            <option value={index+1}>{currentMonth}</option>
        )
    })

    return (
        <StyledSelect name ='month' value={inputDate.month} onChange={(e) => handleDate(e)}>
            {allOptionElement}
        </StyledSelect>
    )
}