import React,{ useContext, useState } from 'react'
import userIcon from '../assets/user.png'
import passwordIcon from '../assets/password.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input } from '../Components/UI/Input/Input'
import { Button } from '../Components/UI/Button/Button'
import axios from 'axios'
import { userContext } from '../userContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useContext(userContext)
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault()
        // console.log(email, password)
        const data = {email, password}


        axios.post('/api/user/login', data, {withCredentials: true})
        .then(res => {
            //console.log(res)
            user.setData(res.data)
            navigate(res.data.redirectUrl)
            
        }).catch(err => {
            toast.error(err.response.data.message);
        })
    }


    return (
        <div className="w-full grid grid-cols-2 font-mono mt-10 overflow-hidden">
            <section className="">
                <img src="https://doodleipsum.com/700/flat?i=0462f38b936928e4aded312497d316a7" alt="" className=""/>
            </section>

            <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center">
                <section className="flex flex-col justify-center items-center">
                    <section className="flex mb-10">
                        <span><img src={userIcon} alt="username" className="w-5 h-5 relative left-8 top-5"/></span>
                    <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </section>

                    <section className="flex mb-10">
                        <span><img src={passwordIcon} alt="username" className="w-5 h-5 relative left-8 top-5"/></span>
                        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </section>
                    <Button name="LOGIN" />

                    <p className="mt-10">Doesn't have an account? <span className="text-blue-600 underline"><NavLink to="/signup">Register</NavLink></span></p>
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
