export function toysReducer(state = {toys: null}, action = {}) {
    switch (action.type) {
        case 'SET_TOYS':
            return {...state, toys: action.toys}
        default:
            return state
    }
}