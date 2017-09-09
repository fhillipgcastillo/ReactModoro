/*handle auth state*/
const initialState = {
	isAuthed: false, 
	isAuthenticating: true, 
	authedId: ''
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
		default :
			return state
	}
}