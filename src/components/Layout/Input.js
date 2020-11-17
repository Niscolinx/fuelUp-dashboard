import React from 'react'

const input = (props) => {
    let inputElement = null
    

    switch (props.inputtype) {
        case 'input':
            inputElement = <input {...props.config}
                className={props.validateClass}
                value={props.value}
                onChange={props.changed}
                autoComplete
            />
            break;
        case 'textarea':
            inputElement = <textarea {...props.config}
                className={props.validateClass}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case 'select':
            inputElement = <select value={props.value} onChange={props.changed}  className={props.validateClass}>
                {props.config.options.map(option => (
                    <option value={option.value} key={option.value}>{option.displayValue}</option>
                ))}
            </select>
            break;

        default:
            inputElement = <input {...props.config} />
    }

    return (
        <div>
            <label className='label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input
