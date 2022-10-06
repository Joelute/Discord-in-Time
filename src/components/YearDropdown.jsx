import useDate from "../useDate"
import {StyledSelect} from "./StyledDropdown";

export default function YearDropdown({inputDate, handleDate}) {

    let totalOption = 100;

    const getAllOption = () => {
        const allOption = new Array(totalOption).fill('')
        for (let i = 0; i < totalOption; i++) {
            allOption[i] = inputDate.year - totalOption/2 + i
        }
        return(allOption)
    }

    const allOptionElement = getAllOption().map(currentYear => {
        return(
            <option value={currentYear}>{currentYear}</option>
        )
    })

    return(
        <div>
            <StyledSelect name='year' value={inputDate.year} onChange={e => handleDate(e)}>
                {allOptionElement}
            </StyledSelect>
        </div>
    )


}