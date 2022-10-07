import Select from 'react-select'
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
            {
                value: currentYear,
                label: currentYear,
                name: 'year'
            }
        )
    })

    return(
        <div>
            <Select options={allOptionElement} styles={StyledSelect} value={allOptionElement.find(obj => obj.value === inputDate.year)} name='year' onChange={handleDate}>
            </Select>
        </div>
    )
}

