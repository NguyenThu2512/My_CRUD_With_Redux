import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataUser, fetchAllData } from '../action/actions'
import ModalEditUser from './ModalEditUser'

function TableUser() {
    const dispatch =useDispatch()
    const listUsers=useSelector((state)=> state.user.listUsers)
    const isLoading=useSelector((state)=> state.user.isLoading)
    const isError = useSelector((state)=> state.user.isError)
    const [isShowModalEditUser, setIsShowModalEditUser]=useState(false)
    const [dataEditUser, setDataEditUser]=useState({})



    useEffect(()=>{
        dispatch(fetchAllData())     
    }, [])


    const HandleEditUser = (user_edit)=>{
        setIsShowModalEditUser(true)
        setDataEditUser(user_edit)

    }
    const handleClose=()=>{
        setIsShowModalEditUser(false)
    }

    const handleDeleteUser =(user_delete)=>{
        dispatch(deleteDataUser(user_delete.id))
        
    }
  return (
    <div className="container mt-4 mb-4">
      <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    isError===true? <tr><td colSpan={5}>Something went wrong, please try again!</td></tr>:
                    isLoading===true?
                        <tr><td colSpan={5}>Loading data...</td></tr> :
                        listUsers && listUsers.length > 0 && listUsers.map((item, index)=>{
                           return (
                               <tr key={index}>
                                   <td>{item.id}</td>
                                   <td>{item.email}</td>
                                   <td>{item.first_name}</td>
                                   <td>{item.last_name}</td>
                                   <td>
                                       <button className='btn btn-warning' onClick={()=> HandleEditUser(item)}>Edit</button>
                                       <button className='btn btn-danger mx-3' onClick={()=>handleDeleteUser(item)}>Delete</button>
                                   </td>
                                </tr>
                           )
                       })
       
                    
                    
                }
                
                
                
                
            </tbody>
    </Table>
    <ModalEditUser isShowModalEditUser={isShowModalEditUser} handleClose={handleClose} dataEditUser={dataEditUser}/>
    </div>
  )
}

export default TableUser
