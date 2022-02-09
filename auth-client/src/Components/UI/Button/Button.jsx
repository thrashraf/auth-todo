import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = props => {

    
    return (
        <React.Fragment>
            <button onClick={props.onClick} className=" bg-blue-600 text-white rounded-md px-5 py-2">{props.name}</button>
        </React.Fragment>
    )
}
