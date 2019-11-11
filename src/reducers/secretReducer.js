import { SECRET_POST } from '../actions/types';

const initialState = {post:{}}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SECRET_POST:
            return {post:action.payload};
            
        default: 
            return state;
    }
}