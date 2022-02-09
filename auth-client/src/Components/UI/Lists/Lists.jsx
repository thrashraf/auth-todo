import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import deleteIcon from '../../../assets/delete.png'
import checkIcon from '../../../assets/icon-check.svg'
import { userContext } from '../../../userContext'

export const Lists = props => {

    axios.defaults.withCredentials = true


    
    const user = useContext(userContext)
    const lists = user ? user.data : null
    
    
    
    const checkListStyle = () => {

        return {
            background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,45,252,1) 100%)'
        }
    }

    const checkHandler = id => {

            const index = lists.todo.findIndex(list => list.todoId === id);

            const userObj = {...user.data}
            userObj.todo[index].isCheck = !userObj.todo[index].isCheck
            

            user.setData(userObj);
            const todoData = {id, isCheck: lists.todo[index].isCheck}
            
            axios.patch(`http://localhost:5000/updateTodo`, todoData, {withCredentials: true})
            .then(res => {
                console.log(res)  
            })
            .catch(err => console.log(err))

            console.log(id)
            console.log(index) 
    }


    const deleteListhandler = id => {
        
        axios.delete(`http://localhost:5000/deleteTodo/${id}`, {withCredentials: true})
        .then(res => {
            console.log(res)

            const index = lists.todo.findIndex(list => list.todoId === id);
            const userObj = {...user.data}

            userObj.todo.splice(index, 1)
            user.setData(userObj)
        })
        .catch(err => console.log(err))
    }


    const listsTodo = () => {

        if (!lists || (lists && lists.todo.length === 0) ) {
            return (
                <section className="flex justify-between  bg-white px-7 py-5 first:rounded-firstChild last:rounded-lastChild dark:bg-gray-800 dark:text-white dark:line-through transition-colors duration-300 ease-out" >
                <section className="flex">
                   
                    <li className="list-none pl-5"> Plan your day 👋🍃</li>
                </section>
            </section>    
            )
        }
    }

    return (


        <div className="mt-10 text-center">

            {listsTodo()}


            {lists ? lists.todo.filter(list => {

                if (props.filter === 'Active') {
                     return (!list.isCheck)
                } else if (props.filter === 'Completed') {
                    return (list.isCheck)
                } else {
                    return list
                }

            }).map(list => {
            
            return (
                <section className="flex justify-between  bg-white px-7 py-5 first:rounded-firstChild last:rounded-lastChild dark:bg-gray-800 dark:text-white dark:line-through transition-colors duration-300 ease-out"  key={list.todoId}>
                <section className="flex">
                    <span onClick={checkHandler.bind(this, list.todoId)} className="w-6 h-6 bg-white border border-gray-400 rounded-full dark:bg-gray-900 dark:border-gray-900" style={list.isCheck ? checkListStyle() : null}>
                        <img src={checkIcon} alt="check" className="w-3 h-3 relative top-1 left-1" style={{'display': list.isCheck ? 'block' : 'none'}}/>
                    </span>
                    <li className="list-none pl-5" style={list.isCheck ? {textDecoration: 'line-through', textDecorationColor: 'gray'} : null} >{list.input}</li>
                </section>
                <img src={deleteIcon} alt="delete" className="w-5 h-5 cursor-pointer" onClick={deleteListhandler.bind(this, list.todoId)}/>
            </section>            

            )
        }): null}
        </div>
    )
}
