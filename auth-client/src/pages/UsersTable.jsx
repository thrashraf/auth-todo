import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import editIcon from '../assets/edit.png'
import deleteIcon from '../assets/delete.png'
import eyeIcon from '../assets/eye.png'
import { Backdrop } from '../Components/UI/Backdrop/Backdrop'
import { Modal } from '../Components/UI/Modal/Modal'


export const UsersTable = props => {


    const [user, setUser] = useState(null);
    const [backdrop, setBackdrop] = useState(false)
    const [todos, setTodos] = useState([])

    const navigate = useNavigate();
    
    

    useEffect(() => {
    
        axios.get('/admin', {withCredentials: true})
        .then(res => {

            console.log(res)

            const users = [];
            const data = res.data
            for (const key in data) {
                users.push({
                    id: key,
                    name: data[key].name, 
                    email: data[key].email, 
                    date: data[key].date,
                    role: data[key].role
                })
            }

            setUser(users)
        })
      }, [])



      const deleteUserHandler = id => {

        axios.delete(`/deleteUser/${id}`)
        .then(res => {
            const index = user.findIndex(list => list.id === id);
            const userArr = [...user]

            userArr.splice(index, 1)
            setUser(userArr)
            console.log(user)
        }) 
      }

      const editUser = id => {
        navigate('/admin/edituser', {state: {id: id}})
        
      }

       
      const usersTodos = id => {

        setBackdrop(true)

        console.log(id)
          
        axios.get(`/UserTodos/${id}`)
        .then(res => {
            
            const todos = [];
            const data = res.data.todo
            for (const key in data) {
                todos.push({id: key, data: data[key].input, isCheck: data[key].isCheck})
                }
            setTodos(todos)

            console.log(todos)

            
        })
        .catch(err => console.log(err))
          
    }
    
    
    const tableData = () => {
        
        return user ? user.map(users => {
            console.log(users)
            return (
                <tr key={users.id}>
                    <td className='p-4 bg-white'>{users.name}</td>
                    <td className='p-4 bg-white'>{users.email}</td>
                    <td className='p-4 bg-white'>{users.role}</td>
                    <td className='p-4 bg-white'>
                        <img style={props.editUser ? {display: 'block'} : {display: 'none'}} src={editIcon} onClick={editUser.bind(this, users.id)} alt="delete" className='w-5 cursor-pointer' />
                    </td>
                    <td className='p-4 bg-white'>
                        <img style={props.deleteUser ? {display: 'block'} : {display: 'none'}} src={deleteIcon} onClick={deleteUserHandler.bind(this, users.id)} alt="delete" className='w-5 cursor-pointer' />
                    </td>
                    <td className='p-4 bg-white'>
                        <img style={props.seeTodos ? {display: 'block'} : {display: 'none'}} src={eyeIcon} onClick={usersTodos.bind(this, users.id)} alt="eye" className='w-5 cursor-pointer' />
                    </td>
                </tr>
            )
        }) : null
      }
      

      const closeBackdrop = () => {
          setBackdrop(false)
          setTodos([])
      }





    return (
        
        <div>
             <Backdrop show={backdrop} clicked={closeBackdrop}/>
             <Modal show={backdrop} clicked={closeBackdrop}> 
                {todos ? todos.map(todo => {
                    return (
                        <li className="list-none pl-5" style={todo.isCheck ? {textDecoration: 'line-through', textDecorationColor: 'gray'} : null} >{todo.data}</li>
                    )
                }) : null}
             </Modal>
        
             <div className='w-full h-full flex flex-col justify-center items-center text-left'>

                    <table className='w-2/4 m-auto bg-gray-200 text-center rounded-md mt-10'>
                        <thead>
                            <tr className='w-40'>
                                <th className=' py-2'>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLES</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableData()}
                        </tbody>

                    </table>
                </div>     
        </div>
              
    )
}
