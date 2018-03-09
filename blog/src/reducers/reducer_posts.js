import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS, CREATE_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case CREATE_POST:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}