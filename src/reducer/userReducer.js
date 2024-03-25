
import { ADD_DATA_ERROR, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, EDIT_DATA_REQUEST, EDIT_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../action/types';
    const INITIAL_STATE = {
        listUsers: [],
        isLoading: false,
        isError: false,
        isCreating: false,
    };


    const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case FETCH_DATA_REQUEST:
               return {
                 ...state, isLoading: true, isError: false
               };
            case FETCH_DATA_SUCCESS:
               return {
                  ...state, listUsers: action.payload, isLoading: false, isError:false
               };
            case FETCH_DATA_ERROR:
                return {
                    ...state, isLoading:false, isError:true
                };
            case ADD_DATA_REQUEST:
                return {
                    ...state, isCreating: true
                };
            case ADD_DATA_SUCCESS:
                return {
                    ...state, listUsers: [...state.listUsers, action.payload], isCreating: false
                };
            case ADD_DATA_ERROR:
                return {
                    ...state, isCreating: false
                }
            case EDIT_DATA_REQUEST:
                return {
                    ...state
                }
            case EDIT_DATA_SUCCESS:
                return{
                    ...state, listUsers: state.listUsers.map(user=>
                        user.id===action.payload.id? action.payload:user
                    )
                }
            case DELETE_DATA_REQUEST:
                return {
                    ...state
                }
            
            case DELETE_DATA_SUCCESS:
                return{
                    ...state, listUsers: state.listUsers.filter(user=>user.id!==action.payload)
                }
             default: return state;
        }
    };


    export default reducer;