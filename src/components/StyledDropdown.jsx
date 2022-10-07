const StyledSelect = {
    option: (provided, state) => ({
        ...provided,
        padding: 5,
    }),
    container: (provided) => ({
        ...provided,
        color: '#EBEBEB',
        ':focused': {
            border: 'none'
        }
    }),

    control: (provided, state) => ({
        ...provided,
        border: 'none',
        width: 'auto',
        background:' #202326',
        fontSize: '1.3rem',
        padding:' .2em .4em',
        borderRadius: state.isFocused? '10px 10px 0 0': 10,
        minWidth: '8em',
    }),

    indicatorSeparator: () => ({
        display: 'none'
    }),

    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#2C2F33',
        margin: '2px 0',
        borderRadius: '0 0 10px 10px',
        
    }),

    valueContainer: (provided) => ({
        ...provided,
        backgroundColor: '#202326',
        padding: 0,
        margin: 0
    }),

    singleValue: (provided) => ({
        ...provided,
        margin: 0,
        color: '#B3B5BD',
        fontSize: '1.3rem'
        
    }),

    option: (provided, state) => ({
        padding: '1em',
        backgroundColor: state.isSelected? '#393D41': '#2C2F33',
        ':hover': {
            backgroundColor: '#393D41'
        }
    }),

    input: (provided) => ({
        ...provided,
        margin: 0,
        color: '#B3B5BD',
        fontSize: '1.3rem'
    })
}


export {StyledSelect}