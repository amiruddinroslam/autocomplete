import * as type from '../types'

export function addLocation(location) {
    return {
        type: type.ADD_LOCATION,
        payload: location
    }
}