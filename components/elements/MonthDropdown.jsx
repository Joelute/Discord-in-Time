import {StyledSelect} from "./StyledDropdown";
import Select from 'react-select'
import {allOption} from '../../utils/DateArray'

export default function MonthDropdown({inputDate, handleDate}) {

    const allOptionElement = allOption.map((currentMonth, index) => {
        return {
            value: index + 1,
            label: currentMonth,
            name: 'month'
        }
        
    })

    return (
        <Select options={allOptionElement} styles={StyledSelect} value={allOptionElement.find(obj => obj.value === inputDate.month)} name='month' onChange={handleDate}>
        </Select>
    )
}