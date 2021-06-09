// a reducer is a function that accepts the state and action
// based on the action type, it determines the change to the apps state

// state = posts, need to set default value for state
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload 
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}