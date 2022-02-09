import React from 'react'
import deleteIcon from '../../../assets/delete.png'

export const Modal = props => {

    const modalHanlder = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }

    return (
        <div className='bg-white rounded-lg max-w-lg w-1/3 fixed left-1/3 top-1/3 transition-all z-50 flex flex-col justify-center items-center ease-in-out duration-300' 
        
        style={modalHanlder}>
            <div className=' w-1/2 text-left my-10'>
                {props.children}
            </div>
            
            <img src={deleteIcon}  alt="delete" className='w-5 cursor-pointer mb-10' onClick={props.clicked}/>
        </div>
    )
}
