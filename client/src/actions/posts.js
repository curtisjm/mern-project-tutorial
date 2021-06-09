import { TableCell } from '@material-ui/core'
import * as api from '../api'

// action creators - functions that return actions
// use redux-thunk to add async dispatch
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        const action = { type: 'FETCH_ALL', payload: data }
        // dispatch the action instead of returning it
        dispatch(action)
    } catch (error) {
        console.error(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.error(error.message)
    }
}