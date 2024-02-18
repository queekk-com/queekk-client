import { configureStore } from '@reduxjs/toolkit';

const initialState = {}

const reducerFtn = (state = initialState, action = {}) => {
    switch(action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                user: action.payload
            }

        case "SET_TOKEN_DATA":
            return {
                ...state,
                tokens: action.payload
            }
        
        case "SET_ORG_DATA":
            return {
                ...state,
                organizations: action.payload
            }
        
        case "SET_MESSAGE_DATA":
            return {
                ...state,
                messages: action.payload
            }

        case "UPDATE_TOKEN_DATA":
            return {
                ...state,
                tokens: [
                    action.payload,
                    ...state.tokens,
                ]
            }

        case "UPDATE_ORG_DATA":
            return {
                ...state,
                organizations: [
                    action.payload,
                    ...state.organizations,
                ]
            }

        case "UPDATE_USER_DATA":
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }

        default:
            return state
    }
}

const store = configureStore({
    reducer: reducerFtn
})

export default store