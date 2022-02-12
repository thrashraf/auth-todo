import React, { useState } from 'react'
import { Input } from '../Components/UI/Input/Input'
import { Button } from '../Components/UI/Button/Button'
import profile from '../assets/profile.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Profile = () => {

    const [newEmail, setEmail] = useState('')
    const [newPass, setPass] = useState('')
    const [confPass, setConfPass] = useState('')

    const onSubmitHandler = e => {
        e.preventDefault()
        
        if (newPass === confPass) {
            
            axios.post('/api/user/updateProfile', {password: newPass}, {withCredentials: true})
            .then(res => {
                console.log(res)
                toast.success(res.data.message)
            })
            .catch(err => {
                toast.error(err.response.data.message)
            })

        } else {
            toast.error('password must be same')
        }
    }

    return (
        <div className="max-w-lg m-auto pb-10">

            <img src={profile} alt="profile" className=" rounded-full w-32 h-32 m-auto mb-10"/>

            <form onSubmit={onSubmitHandler} className='flex flex-col items-center'>
                <section className="flex mb-10">
                    <Input placeholder="email" type="text" value={newEmail} onChange={(e) => setEmail(e.target.value)}/>
                </section>

                <section className="flex mb-10">
                    <Input placeholder="password" type="password" value={newPass} onChange={(e) => setPass(e.target.value)}/>
                </section>

                <section className="flex mb-10">
                    <Input placeholder="password" type="password" value={confPass} onChange={(e) => setConfPass(e.target.value)}/>
                </section>

                <Button name="SAVE CHANGE" className="m-auto" />

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
            </form>
        </div>
    )
}
