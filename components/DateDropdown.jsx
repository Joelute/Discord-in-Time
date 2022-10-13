import Select from 'react-select'
import {StyledSelect} from "./StyledDropdown";

export default function DateDropdown({inputDate, handleDate}) {

    const getAllOption = () => {
        const totalDays = new Date(inputDate.year, inputDate.month, 0).getDate()
        const allOption = new Array(totalDays).fill('')
        return allOption
    }

    const allOptionElement = getAllOption().map((currentDay, index) => {
        return {
            value: index + 1,
            label: index + 1,
            name: 'date'
        } 
    })

    return(
        <Select options={allOptionElement} styles={StyledSelect} value={allOptionElement.find(obj => obj.value === inputDate.date)} name='date' onChange={handleDate}>
        </Select>
    )
}