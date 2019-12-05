import { TOGGLE_CLOSE, TOGGLE_LOCK} 
from "../actions"

export const initialState = {
    locked: false,
    closed: false,
}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case TOGGLE_CLOSE:
        return {
            ...state,
            closed: !state.closed
        }
    case TOGGLE_LOCK:
        return {
            ...state,
            locked: !state.locked
        }

    default: 
        return state
}
}
