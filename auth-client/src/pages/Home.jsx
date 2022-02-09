import React, { useContext,  useState } from 'react'
import axios from 'axios'
import { userContext } from '../userContext'
import { Lists } from '../Components/UI/Lists/Lists'
import { Control } from '../Components/UI/Control/Control'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    
    const [filter, setFilter] = useState('All');
    const [input, setInput] = useState('')

    const user = useContext(userContext); 
    const navigate = useNavigate() 

    const onSubmitHandler = e => {
        e.preventDefault()

        const data = {input, isCheck: false}
        console.log(data)

        //? if the user isn't auth then redirect to the login page
        if (!user.data) navigate('/login')

        axios.post('/createTodo', data, {withCredentials: true})
        .then(res => {
            console.log(res)
            const todoList = {todoId: res.data.todoId, input: res.data.input, isCheck: false}

            //? copy user data
            const userObj = {...user.data}
            //? push new list to re render
            userObj.todo.push(todoList)

            user.setData(userObj)
            setInput('')
            // console.log(userObj)
          
            
        })
    }
  
  
    return (
      
      <div className="w-full h-full bg-gray-100 ">
     
        <section className="tablet:m-auto  bg-no-repeat bg-cover h-52 w-full bg-desktop-light dark:bg-desktop-dark py-10 px-10">
          <header className=" max-w-lg m-auto">
            <div className="bg-white mt-5 rounded-lg ">
                <form onSubmit={onSubmitHandler}>
                    <input placeholder="Create a new todo..."  className="text-sm py-5 px-5 w-full rounded-xl focus:border-white focus:outline-none" value={input} onChange={(e) => setInput(e.target.value)}/>
                </form>
            </div>
          </header>
  
          <main className="max-w-lg m-auto">
            <Lists filter={filter} />
          </main>
  
          <footer className="max-w-lg m-auto pb-20">
            <Control setFilter={setFilter} filter={filter}/>
          </footer>
        </section>
    
      </div>
    )
}
