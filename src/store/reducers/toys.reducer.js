export function toysReducer(state = {toys: []}, action = {}) {
    switch (action.type) {
        case 'SET_TOYS':
            return {...state, toys: action.toys}
        default:
            return state
    }
}