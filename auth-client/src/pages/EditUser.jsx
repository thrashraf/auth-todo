import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Components/UI/Button/Button';
import { Input } from '../Components/UI/Input/Input';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditUser = () => {

    const [name, setNewName] = useState('')
    const [email, setNewEmail] = useState('')
    const [role, setNewRole] = useState('')
    const [password, setNewPassword] = useState('')

    const navigate = useNavigate()

    const location = useLocation();
    const id = location.state.id
    

    useEffect(() => {

        console.log(id)

        axios.get(`http://localhost:5000/userDetail/${id}`)
        .then(res => {
            const data = res.data

            console.log(res.data)
            setNewName(data.name)
            setNewEmail(data.email)
            setNewRole(data.role)
        })
    }, [id])

    const onSubmitHandler = e => {
        e.preventDefault()

        const data = {id, name, email, role, password}

        toast.promise(
            axios.post('http://localhost:5000/updateUserDetail', data, {withCredentials: true})
            .then(res => {
                console.log(res)
                // navigate('/admin')
                 
            }).catch(err => {
                console.log(err)
            }),{
                pending: 'Updating your account 🧑‍🔧',
                success: 'Successful Upadate ✅',
                error: 'Something went wrong 🚩'
            },
        )
    }


    
    return (
        
        <div className=' flex justify-center items-center'>
         <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <form onSubmit={onSubmitHandler} className='grid grid-cols-2 gap-5 mt-20'>
                <section className='flex flex-col'>
                    <span className='text-sm text-gray-400 ml-2'>Name</span>
                    <Input placeholder="New Username" type="text" value={name} onChange={(e) => setNewName(e.target.value)}/>
                </section>

                <section className='flex flex-col'>
                    <span className='text-sm text-gray-400 ml-2'>Email</span>
                    <Input placeholder="New email" type="email" value={email} onChange={(e) => setNewEmail(e.target.value)}/>
                </section>

                <section className='flex flex-col'>
                    <span className='text-sm text-gray-400 ml-2'>Role</span>
                    <Input placeholder="New Role" type="text" value={role} onChange={(e) => setNewRole(e.target.value)}/>
                </section>

                <section className='flex flex-col'>
                    <span className='text-sm text-gray-400 ml-2'>Password</span>
                    <Input placeholder="New Password" type="password" value={password} onChange={(e) => setNewPassword(e.target.value)}/>
                </section>

                <section className='mt-20'>
                    <Button name="SAVE CHANGES"/>
                </section>
            </form>
            
        </div>
    )
}
