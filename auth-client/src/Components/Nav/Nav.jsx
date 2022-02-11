import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../UI/Button/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { useCookies  } from 'react-cookie'
import { userContext } from '../../userContext';

export const Nav = () => {

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const navigate = useNavigate();
    const user = useContext(userContext)
    const redirectLogin = () => navigate('/login')

    const { pathname } = useLocation()
    console.log(pathname)

    const logoutHandler = () => {
        removeCookie('token')
        navigate('/')
        user.setData(null)
    }

    

    const admin = (
        <React.Fragment>
            <p className="cursor-pointer"><NavLink to="/admin">USERS</NavLink></p>
            <p className="cursor-pointer"><NavLink to="/todos">TODOS</NavLink></p>
        </React.Fragment>
        
    )

    
    return (
        <div className="flex w-full justify-between py-5 px-10 font-mono bg-gray-100" style={pathname === '/login' || pathname === '/signup' ? {display: 'none'} : {display: 'flex'}}>
            <section className={`flex w-1/3 justify-evenly font-bold ${user.data ? 'flex' : 'hidden'}`}>
                <p className=" cursor-pointer"><NavLink to="/">HOME</NavLink></p>
                {user.data ? <p className="cursor-pointer"><NavLink to="/profile">PROFILE</NavLink></p> : null}
                {user.data && user.data.role === 'Admin' ? admin : null}
            </section>  

            <section className={`flex  ${user.data ? 'justify-between' : ' w-full justify-end '}`}>
                <Button onClick={user.data ? logoutHandler : redirectLogin} name={user.data ? "LOGOUT" : "LOGIN"}/>
            </section>
        </div>
    )
}
