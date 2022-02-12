import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from '../Components/UI/Input/Input'
import { Button } from '../Components/UI/Button/Button'
import axios from 'axios'
import { userContext } from '../userContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const user = useContext(userContext);

    const onSubmitHandler =  async (e) => {

        e.preventDefault()
         if (password === confirmPass) {

            const data = {name, email, password}
            //console.log(data)     

            axios.post('/api/user/signup', data, {withCredentials: true})
            .then(res => {
                //console.log(res)
                const data = res.data;
                toast.success("successful create account")
                user.setData(data)
               
            })
            .catch(err => {
                //console.log(err)
                const errMessage = err.response.data.message
                toast.error(errMessage);
                
            })
            
         } else {
            toast.error('password not match')
         }
    } 

    

    return (
        <div className="w-full grid grid-cols-2 font-mono mt-20">
            <section className="">
                <img src="https://doodleipsum.com/700/flat?i=6afc4821e5d788380a4bb54d9dee5402" alt="" className="w-4/5"/>
            </section>
            
            <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center">
                <section className="flex flex-col justify-center items-center">
                    <section className="flex mb-10">
                        <Input placeholder="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </section>

                    <section className="flex mb-10">
                        <Input placeholder="email@test.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </section>

                    <section className="flex mb-10">
                    <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </section>

                    <section className="flex mb-10">
                    <Input placeholder="Re Type-password" type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                    </section>

                    <Button name="SIGN UP" />


                    <p className="mt-10">Already have an account? <span className="text-blue-600 underline"><NavLink to="/login">Login</NavLink></span></p>
                </section> 
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
