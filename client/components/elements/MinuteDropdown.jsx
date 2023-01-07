import Select from 'react-select'
import {StyledSelect} from "./StyledDropdown";

export default function MinuteDropdown({inputDate, handleDate, disabled}) {

    const getAllOption = () => {
        const allOption = new Array(60).fill('')
        return allOption
    }

    const allOptionElement = getAllOption().map((currentElement, index) => {
        return {
            value:index,
            label:index,
            name: 'minute'
        }
    })

    return(
        <Select 
            options={allOptionElement} 
            styles={StyledSelect} 
            value={allOptionElement.find(obj => obj.value === inputDate.minute)} 
            name='minute' 
            onChange={handleDate}
            isDisabled={disabled}>
        </Select>
    )
}