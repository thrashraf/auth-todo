import React from 'react'

export const Input = props => {
    return (
        <React.Fragment>
            <input placeholder={props.placeholder} type={props.type} className="px-10 py-4 rounded-md border-gray-200 border-2 w-96"
                value={props.value} onChange={props.onChange}
            />
        </React.Fragment>
    )
}
