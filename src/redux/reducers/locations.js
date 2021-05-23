import * as type from '../types'

const initialState = { 
    locations: []
}

export default function locations(state = initialState, action) {
    switch(action.type) {
        case type.ADD_LOCATION:
            return { 
                ...state,
                locations: [...state.locations, action.payload]
            }
        default:
            return state
            
    }
}