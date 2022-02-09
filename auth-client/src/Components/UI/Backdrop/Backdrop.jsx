import React from 'react'

export const Backdrop = props => (
    props.show ? <div className=' fixed top-0 left-0 w-full h-full z-40 bg-backdrop' onClick={props.clicked}></div> : null
)
