import axios from 'axios';
import { ADD_DATA_ERROR, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, DELETE_DATA_ERROR, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, EDIT_DATA_ERROR, EDIT_DATA_REQUEST, EDIT_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './types';

// Fetching All data user
export const fetchAllData =()=>{
    return async (dispatch, getState)=>{
        dispatch(fetchDataRequest())
        try {
            let res=await axios.get("https://reqres.in/api/users")
            if(res && res.data && res.data.data){
                let dataUser=res.data.data
                dispatch(fetchDataSuccess(dataUser))

            }
            
        } catch (error) {
            console.log(error)
            dispatch(fetchDataError())
        }
    }
}


export const fetchDataRequest = () =>{
    return {
        type: FETCH_DATA_REQUEST
    };
}

export const fetchDataSuccess = (payload) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload
    };
}

export const fetchDataError = () =>{
    return {
        type: FETCH_DATA_ERROR
    }
}

// Add new user
export const addDataUser =(email, first_name, last_name)=>{
    return async (dispatch, getState)=>{
        dispatch(addDataRequest())
        try {
            let res = await axios.post("https://reqres.in/api/users", {email, first_name, last_name})
            if(res && res.data && res.data.createdAt){
                dispatch(addDataSuccess(res.data))
            }
            
            
        } catch (error) {
            console.log(error)
            dispatch(addDataError())
            
        }
    }
}

export const addDataRequest = () =>{
    return {
        type: ADD_DATA_REQUEST
    }
}
export const addDataSuccess = (payload) =>{
    return {
        type:ADD_DATA_SUCCESS,
        payload
    }
}
export const addDataError = () =>{
    return{
        type:ADD_DATA_ERROR
    }
}


export const editDataUser = (id, email, first_name, last_name) =>{
    return async (dispatch, getState)=>{
        dispatch(editDataRequest())
        try {
            let res=await axios.put(`https://reqres.in/api/users/${id}`, {id, email, first_name, last_name})
            if(res && res.data && res.data.updatedAt){
                dispatch(editDataSuccess(res.data))
            }
        } catch (error) {
            dispatch(editDataError())
            console.log(error)
        }
    }
}

export const editDataRequest = () =>{
    return {
        type:EDIT_DATA_REQUEST
    }
}
export const editDataSuccess = (payload) =>{
    return {
        type: EDIT_DATA_SUCCESS,
        payload
    }
}
export const editDataError = () =>{
    return{
        type:EDIT_DATA_ERROR
    }
}

export const deleteDataRequest = () =>{
    return{
        type:DELETE_DATA_REQUEST
    }
}

export const deleteDataSuccess = (id) =>{
    return{
        type:DELETE_DATA_SUCCESS,
        payload: id
    }
}
export const deleteDataError = () =>{
    return{
        type:DELETE_DATA_ERROR
    }
}

export const deleteDataUser =(id)=>{
    return async (dispatch, getState) =>
    {
        dispatch(deleteDataRequest())
        try {
            let res=await axios.delete(`https://reqres.in/api/users/${id}`)
            if(res && res.status===204){
                dispatch(deleteDataSuccess(id))
            }
            console.log("check delete:", res)
        } catch (error) {
            dispatch(deleteDataError())
            
        }
    }
}