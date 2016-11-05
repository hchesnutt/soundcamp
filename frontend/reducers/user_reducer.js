import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_ERRORS
} from '../actions/user_actions';
import { merge } from 'lodash';
// TODO: make two seperate nodes in tree for user and users
const _nullUsers = Object.freeze( {
  viewUsers: {},
  errors: []
} );

const UserReducer = ( state = _nullUsers, action ) => {
  Object.freeze( state )
  switch ( action.type ) {
  case RECEIVE_USER:
    return merge( {}, state, { [action.user.id]: action.user } );
  case RECEIVE_USERS:
    return merge( {}, state, { viewUsers: action.user } );
  case RECEIVE_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default UserReducer;