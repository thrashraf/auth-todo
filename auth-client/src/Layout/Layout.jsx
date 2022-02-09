import React from 'react'
import { Nav } from '../Components/Nav/Nav'

export const Layout = (props) => {
    return (
        <div className=' h-full'>
            <Nav />
            {props.children}
        </div>
    )
}
