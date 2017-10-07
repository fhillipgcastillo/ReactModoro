import { getAccessToken, authWithTocken } from '../../api/auth'

/*handle auth state*/
const initialState = {
	isAuthed: false,
	isAuthenticating: false,
	authedId: ''
};
const AUTHENTICATING = 'AUTHENTICATING';
const NOT_AUTHED = 'NOT_AUTHED';
const IS_AUTHED = 'IS_AUTHED';

export function authenticating(){
	return {
		type: AUTHENTICATING,
	}
};

export function notAuthed(){
	return {
		type: NOT_AUTHED
	}
}

export function isAuthed(){
	return {
		type: IS_AUTHED
	}
};

export function onAuthChange(user){
	return function(dispatch){
		if(!user){
			dispatch(notAuthed())
		} else {
			const { providerData, uid } = user;
			dispatch(isAuthed(uid));
		}
	}
};

export function handleAuthWithFirebase(){
	return function(dispatch, getState){
		dispatch(authentication());
		return getAccessToken()
			.then(({accessToken}) => authWithTocken(accessToken))
			.catch((error) => console.warn('Error in handleAuthWithFirebase'));
	}
};

export default function authentication (state = initialState, action){
	// if(action.type === 'AUTH_USER') {
	// 	return {
	// 		...state,/*is object expretch which give all state default values*/
	// 		isAuthed: true,
	// 		authedId: action.user_id
	// 	}
	// }
	switch(action.type){
		case AUTHENTICATING:
			return {
				...state,
				isAuthenticating: true
			}
		case NOT_AUTHED:
			return {
				isAuthenticating: false,
				isAuthed: false,
				authedId: ''
			}
		case IS_AUTHED:
			return {
				isAuthed: true,
				isAuthenticating: false,
				authedId: action.uid,
			}
		default :
			return state
	}
}
