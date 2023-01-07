import Select from 'react-select'
import {StyledSelect} from "./StyledDropdown";

export default function SecondDropdown({inputDate, handleDate, disabled}) {

    const getAllOption = () => {
        const allOption = new Array(60).fill('')
        return allOption
    }

    const allOptionElement = getAllOption().map((currentElement, index) => {
        return{
            value:index,
            label :index,
            name: 'second'
        }
    })

    return(
        <Select 
            options={allOptionElement} 
            styles={StyledSelect} 
            value={allOptionElement.find(obj => obj.value === inputDate.second)} 
            name='second' 
            onChange={handleDate}
            isDisabled={disabled}>
        </Select>
    )
}