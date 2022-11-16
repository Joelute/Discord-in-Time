import Select from 'react-select'
import {StyledSelect} from "./StyledDropdown";

export default function HourDropdown({inputDate, handleDate, disabled}) {

    const getAllOption = () => {
        const allOption = new Array(24).fill('')
        return allOption
    }

    const allOptionElement = getAllOption().map((currentElement, index) => {
        return{
            value:index,
            label:index,
            name: 'hour'
        }
    })

    return(
        <Select 
            options={allOptionElement} 
            styles={StyledSelect} 
            value={allOptionElement.find(obj => obj.value === inputDate.hour)} 
            name='hour' 
            onChange={handleDate}
            isDisabled={disabled}>
        </Select>
    )
}