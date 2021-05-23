import { call, put, take } from 'redux-saga/effects'

function* locationSaga() {
    yield take('ADD_LOCATION');
    console.log('redux-saga')
}

export default locationSaga;