import Select from 'react-select'
import {StyledSelect} from "./StyledDropdown";

export default function TypeDropdown({dateType, handleType}) {

    const allOptionElement =[ 
        {
            value: '',
            label: 'Default',
            name: 'type',
        },
        {
            value: ':t',
            label: 'Short Time',
            name: 'type',
        },
        {
            value: ':T',
            label: 'Long Time',
            name: 'type',
        },           
        {
            value:':d',
            label: 'Short Date',
            name: 'type',
        },
        {
            value:':D',
            label: 'Long Date',
            name: 'type',
        },
        {
            value:':F',
            label: 'Long Date/Time',
            name: 'type',
        },
        {
            value:':R',
            label: 'Relative Time',
            name: 'type',
        }
    ]

    return (
        <Select options={allOptionElement} styles={StyledSelect} value={dateType ? allOptionElement.find(obj => obj.value === dateType) : allOptionElement.find(obj => obj.label === 'Default')} name='type' onChange={handleType}>
        </Select>
    )
}

