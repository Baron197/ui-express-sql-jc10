import { 
    LOGIN_SUCCESS, LOGOUT_USER 
} from "../actions/types";

const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    status: '',
    token: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS :
            return action.payload
        case LOGOUT_USER :
            return INITIAL_STATE
        default :
            return state
    }
}