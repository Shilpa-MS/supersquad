import {combineReducers} from 'redux'
import characters from './characterReducer';
import heroes from './heroReducer'



const rootReducer=combineReducers({
    characters,
    heroes
})

export default rootReducer;