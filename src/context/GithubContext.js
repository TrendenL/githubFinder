import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initState)

    // Get search results
    const searchUsers = async (text) => {
        setLoaing()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(
            `${GITHUB_URL}/search/users?${params}`, 
            { headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // Clear users
    const clearUsers = () => dispatch({type: 'CLEAR_USERS'}) 

    // Set loading
    const setLoaing = () => dispatch({type: 'SET_LOADING'})

    return  <GithubContext.Provider value={{
            users: state.users,
            isLoading: state.isLoading,
            searchUsers,
            clearUsers
            }}>
                {children}
            </GithubContext.Provider>
}

export default GithubContext